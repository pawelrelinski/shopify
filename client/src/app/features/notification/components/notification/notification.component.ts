import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'shopify-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements AfterViewInit {
  @Input() data!: { title: string; message: string };
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
