import {Component} from '@angular/core';
import {ProductSimple} from '@features/product/models';


@Component({
  selector: 'shopify-products-list-table',
  templateUrl: './products-list-table.component.html',
  styleUrls: ['./products-list-table.component.scss']
})
export class ProductsListTableComponent {
  public products: Array<ProductSimple> = [
    { id: 1, name: 'prod1', price: 12.99, amount: 12 },
    { id: 2, name: 'prod2', price: 121.03, amount: 4 },
    { id: 3, name: 'prod3', price: 383.59, amount: 0 },
    { id: 4, name: 'prod4', price: 293.87, amount: 5 },
    { id: 5, name: 'prod5', price: 969.63, amount: 2 }
  ];
}
