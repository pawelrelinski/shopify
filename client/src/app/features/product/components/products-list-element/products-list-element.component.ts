import {Component, Input} from '@angular/core';
import {Product} from '@features/product/models';

@Component({
  selector: 'shopify-products-list-element',
  templateUrl: './products-list-element.component.html',
  styleUrls: ['./products-list-element.component.scss']
})
export class ProductsListElementComponent {
  @Input()
  product!: Product;
}
