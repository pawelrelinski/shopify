import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDirective } from '@features/notification/directives';
import { NotificationComponent } from '@features/notification/components/notification/notification.component';

@NgModule({
  declarations: [NotificationDirective, NotificationComponent],
  imports: [CommonModule],
  exports: [NotificationDirective, NotificationComponent],
})
export class NotificationModule {}
