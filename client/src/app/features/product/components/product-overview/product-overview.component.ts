import { Component, Input } from '@angular/core';
import { Product } from '@features/product/models';

@Component({
  selector: 'shopify-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss'],
})
export class ProductOverviewComponent {
  @Input() product!: Product;
}
