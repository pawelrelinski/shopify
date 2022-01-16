import { Component, Input } from '@angular/core';
import { Product } from '@features/product/models';

@Component({
  selector: 'shopify-product-overview-specification[specification]',
  templateUrl: './product-overview-specification.component.html',
})
export class ProductOverviewSpecificationComponent {
  @Input() specification!: Product['dataSheet'];
}
