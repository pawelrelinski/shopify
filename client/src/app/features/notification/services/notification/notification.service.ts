import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationData } from '@features/notification/models';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notifications = new Subject<NotificationData>();
  public readonly notifications = this._notifications.asObservable();

  public show(notification: NotificationData): void {
    this._notifications.next(notification);
  }
}
