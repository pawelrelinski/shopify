import {Component, Input} from '@angular/core';
import {ProductStatus} from '@features/product/models';

export interface InputProduct {
  name: string;
  price: number;
  amount: ProductStatus | boolean;
  date: Date;
}

@Component({
  selector: 'shopify-products-list-table-row',
  templateUrl: './products-list-table-row.component.html',
  styleUrls: ['./products-list-table-row.component.scss']
})
export class ProductsListTableRowComponent {
  @Input()
  set product(value: InputProduct) {
    const { name, price, amount, date } = value;
    this._product = {
      name,
      price,
      amount: !!(ProductStatus.AVAILABLE),
      date
    };
  }

  get product(): InputProduct {
    return this._product;
  }

  private _product!: InputProduct;
}
