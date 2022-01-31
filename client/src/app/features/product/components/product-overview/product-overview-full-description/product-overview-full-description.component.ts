import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'shopify-product-full-description[description]',
  templateUrl: './product-overview-full-description.component.html',
})
export class ProductOverviewFullDescriptionComponent {
  @Input() description!: SafeHtml;
}
