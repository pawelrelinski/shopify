import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationDirective } from '@core/directives/notification/notification.directive';

@NgModule({
  declarations: [NotificationDirective],
  imports: [CommonModule],
  exports: [NotificationDirective],
})
export class DirectivesModule {}
