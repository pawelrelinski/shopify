import {Component} from '@angular/core';
import {Product} from '@features/product/models';

@Component({
  selector: 'shopify-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  public products: Array<Product> = [
    new Product(1, 'T-shirt', 'This is shirt', 4, 12.99)
  ];
}
