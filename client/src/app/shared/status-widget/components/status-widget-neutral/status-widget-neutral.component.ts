import {Component, Input} from '@angular/core';

@Component({
  selector: 'shopify-status-widget-neutral',
  templateUrl: './status-widget-neutral.component.html'
})
export class StatusWidgetNeutralComponent {
  @Input()
  message!: string;
}
