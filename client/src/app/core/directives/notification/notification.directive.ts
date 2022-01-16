import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[shopifyNotification]',
})
export class NotificationDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
