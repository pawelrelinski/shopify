import { Component, Input } from '@angular/core';
import { AttributesOfProduct } from '@features/product/models';

@Component({
  selector: 'shopify-product-list-element[product]',
  templateUrl: './product-list-element.component.html',
})
export class ProductListElementComponent {
  @Input() product!: AttributesOfProduct;
}
