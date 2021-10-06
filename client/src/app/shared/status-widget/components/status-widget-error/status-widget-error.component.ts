import {Component, Input} from '@angular/core';

@Component({
  selector: 'shopify-status-widget-error',
  templateUrl: './status-widget-error.component.html'
})
export class StatusWidgetErrorComponent {
  @Input()
  message!: string;
}
