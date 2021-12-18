import { Component, Input } from '@angular/core';

@Component({
	selector: 'shopify-status-widget-warning',
	templateUrl: './status-widget-warning.component.html',
})
export class StatusWidgetWarningComponent {
	@Input()
	message!: string;
}
