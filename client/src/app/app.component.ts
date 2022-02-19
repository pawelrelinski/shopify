import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '@features/notification/services';
import { NotificationData } from '@features/notification/models';
import { NotificationDirective } from '@features/notification/directives';
import { NotificationComponent } from '@features/notification/components/notification/notification.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'shopify-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(NotificationDirective, { static: true }) notificationHost!: NotificationDirective;

  public isAdminNavigation = false;

  constructor(
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((e: string) => {
        this.isAdminNavigation = e.includes('admin');
      });
    this.notificationService.notifications.subscribe((notification: NotificationData) => {
      this.loadNotificationComponent(notification);
    });
  }

  private loadNotificationComponent(notification: NotificationData): void {
    const viewContainerRef = this.notificationHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<NotificationComponent>(NotificationComponent);
    componentRef.instance.data = {
      title: notification.title,
      message: notification.message,
    };
  }
}
