import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[shopifyNotification]',
  host: {
    '[style.z-index]': '9999',
  },
})
export class NotificationDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
