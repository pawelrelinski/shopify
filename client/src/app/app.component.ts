import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationService } from '@features/notification/services';
import { NotificationData } from '@features/notification/models';
import { NotificationDirective } from '@features/notification/directives';
import { NotificationComponent } from '@features/notification/components/notification/notification.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { DomainService } from '@core/services/domain/domain.service';

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
    private router: Router,
    private domainService: DomainService
  ) {}

  public ngOnInit(): void {
    this.setDomainData();
    this.listenRouterEventsForAdminPath();
    this.listenOnNotifications();
  }

  private loadNotificationComponent(notification: NotificationData): void {
    const viewContainerRef = this.notificationHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef =
      viewContainerRef.createComponent<NotificationComponent>(NotificationComponent);

    componentRef.instance.data = notification;
  }

  private listenRouterEventsForAdminPath(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((e: string) => {
        this.isAdminNavigation = e.includes('admin');
      });
  }

  private listenOnNotifications(): void {
    this.notificationService.notifications.subscribe((notification: NotificationData) => {
      this.loadNotificationComponent(notification);
    });
  }

  private setDomainData(): void {
    this.domainService.enterToPage().subscribe((res: Object) => {});
  }
}
