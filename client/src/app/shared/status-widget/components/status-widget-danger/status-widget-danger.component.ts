import {Component, Input} from '@angular/core';

@Component({
  selector: 'shopify-status-widget-danger',
  templateUrl: './status-widget-danger.component.html'
})
export class StatusWidgetDangerComponent {
  @Input()
  message!: string;
}
