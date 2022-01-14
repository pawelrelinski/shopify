import { Component, Input } from '@angular/core';
import { Product } from '@features/product/models';

@Component({
  selector: 'shopify-product-list-element[product]',
  templateUrl: './product-list-element.component.html',
})
export class ProductListElementComponent {
  @Input() product!: Product;
}
