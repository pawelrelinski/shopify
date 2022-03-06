import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NotificationType } from '@features/notification/models';

@Component({
  selector: 'shopify-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements AfterViewInit {
  @Input() data!: { title: string; message: string; type?: NotificationType };
  @ViewChild('notification') notificationElement!: ElementRef;

  public closeModal(): void {
    this.notificationElement.nativeElement.style.transform = 'translateX(150%)';
    this.notificationElement.nativeElement.style.display = 'none';
  }

  public ngAfterViewInit(): void {
    this.notificationElement.nativeElement.style.transform = 'translateX(150%)';
    this.notificationElement.nativeElement.classList.remove('hidden');
    setTimeout(() => {
      this.notificationElement.nativeElement.style.transform = 'translateX(0%)';
      this.notificationElement.nativeElement.style.display = 'block';
    }, 1_000);
    setTimeout(() => {
      this.closeModal();
    }, 10_000);
  }
}
