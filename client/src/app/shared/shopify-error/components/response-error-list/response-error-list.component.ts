import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopify-response-error-list',
  templateUrl: './response-error-list.component.html',
  styleUrls: ['./response-error-list.component.scss'],
})
export class ResponseErrorListComponent {
  @Input() errors!: string[];
}
