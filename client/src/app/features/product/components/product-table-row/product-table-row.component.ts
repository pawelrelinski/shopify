import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

import { ProductResponse } from '@features/product/models';

export type AttributesOfProduct = ProductResponse['attributes'] & {
  id: number;
};

@Component({
  selector: 'shopify-product-table-row',
  templateUrl: './product-table-row.component.html',
  styleUrls: ['./product-table-row.component.scss'],
})
export class ProductTableRowComponent {
  @Input()
  set product(value: AttributesOfProduct) {
    this._product = value;
  }

  public get product(): AttributesOfProduct {
    return this._product;
  }

  @Input()
  set index(value: number) {
    this._index = ++value;
  }

  public get index(): number {
    return this._index;
  }

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.cursor') cursor!: string;

  private _product!: AttributesOfProduct;
  private _index!: number;

  public date = new Date();
  public dropdownMenuIsShow = false;

  @HostListener('mouseover')
  public onMouseOver(): void {
    this.bgColor = 'rgb(215,215,215)';
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.bgColor = 'rgb(255, 255, 255)';
    this.cursor = '';
  }

  public isSuccess(): boolean {
    return this.product.amount >= 8;
  }

  public isWarning(): boolean {
    return this.product.amount > 3 && this.product.amount < 8;
  }

  public isDanger(): boolean {
    return this.product.amount <= 3;
  }

  public toggleDropdownMenu(): void {
    this.dropdownMenuIsShow = !this.dropdownMenuIsShow;
  }

  public delete(): void {
    this.onDelete.emit(this.product.id);
  }
}
