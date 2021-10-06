import {Component, Input} from '@angular/core';

@Component({
  selector: 'shopify-status-widget-success',
  templateUrl: './status-widget-success.component.html'
})
export class StatusWidgetSuccessComponent {
  @Input()
  message!: string;
}
