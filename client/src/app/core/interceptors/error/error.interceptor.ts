import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationService } from '@features/notification/services';
import { NotificationType } from '@features/notification/models';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(3),
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.notificationService.show({
            title: error.statusText,
            message: '',
            type: NotificationType.ERROR,
          });
          this.router.navigate(['/sign-in']);
        }
        return throwError(error);
      })
    );
  }
}
