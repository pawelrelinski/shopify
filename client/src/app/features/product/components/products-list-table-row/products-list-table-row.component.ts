import {Component, Input} from '@angular/core';
import {ProductSimple} from '@features/product/models';


@Component({
  selector: 'shopify-products-list-table-row',
  templateUrl: './products-list-table-row.component.html',
  styleUrls: ['./products-list-table-row.component.scss']
})
export class ProductsListTableRowComponent {
  @Input()
  set product(value: ProductSimple) {
    this._product = value;
  }

  get product(): ProductSimple {
    return this._product;
  }

  private _product!: ProductSimple;

  public date = new Date();

  public isSuccess(): boolean {
    return this.product.amount >= 8;
  }

  public isWarning(): boolean {
    return this.product.amount > 3 && this.product.amount < 8;
  }

  public isDanger(): boolean {
    return this.product.amount <= 3;
  }
}
