import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopify-product-full-description',
  templateUrl: './product-overview-full-description.component.html',
})
export class ProductOverviewFullDescriptionComponent {
  @Input() description!: string;
}
