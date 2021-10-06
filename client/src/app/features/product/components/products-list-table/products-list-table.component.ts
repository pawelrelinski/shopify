import {Component} from '@angular/core';
import {ProductStatus} from '@features/product/models';
import {InputProduct} from '@features/product/components';

@Component({
  selector: 'shopify-products-list-table',
  templateUrl: './products-list-table.component.html',
  styleUrls: ['./products-list-table.component.scss']
})
export class ProductsListTableComponent {
  public products: Array<InputProduct> = [
    { name: 'prod1', price: 12.99, amount: ProductStatus.AVAILABLE, date: new Date() },
    { name: 'prod2', price: 121.03, amount: ProductStatus.NOT_AVAILABLE, date: new Date() },
    { name: 'prod3', price: 383.59, amount: ProductStatus.NOT_AVAILABLE, date: new Date() },
    { name: 'prod4', price: 293.87, amount: ProductStatus.AVAILABLE, date: new Date() },
    { name: 'prod5', price: 969.63, amount: ProductStatus.AVAILABLE, date: new Date() }
  ];
}
