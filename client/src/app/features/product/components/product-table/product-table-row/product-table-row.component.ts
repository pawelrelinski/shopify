import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Product } from '@features/product/models';

@Component({
  selector: 'shopify-product-table-row',
  templateUrl: './product-table-row.component.html',
  styleUrls: ['./product-table-row.component.scss'],
})
export class ProductTableRowComponent {
  @Input()
  set product(value: Product) {
    this._product = value;
  }

  public get product(): Product {
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

  private _product!: Product;
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
    return this.product.quantity >= 8;
  }

  public isWarning(): boolean {
    return this.product.quantity > 3 && this.product.quantity < 8;
  }

  public isDanger(): boolean {
    return this.product.quantity <= 3;
  }

  public toggleDropdownMenu(): void {
    this.dropdownMenuIsShow = !this.dropdownMenuIsShow;
  }

  public delete(): void {
    this.onDelete.emit(this.product.id);
  }
}
