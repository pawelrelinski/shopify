import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortAction } from '@features/product/models';

@Component({
  selector: 'shopify-product-list-header[productsCount][productRange]',
  templateUrl: './product-list-header.component.html',
})
export class ProductListHeaderComponent {
  @Input() productsCount!: number;
  @Input() productRange!: { from: number; to: number };
  @Output() onSort: EventEmitter<SortAction> = new EventEmitter<SortAction>();

  public dropDownMenuIsOpen = false;

  public toggleMenu(): void {
    this.dropDownMenuIsOpen = !this.dropDownMenuIsOpen;
  }

  public showMenu(): void {
    this.dropDownMenuIsOpen = true;
  }

  public hideMenu(): void {
    this.dropDownMenuIsOpen = false;
  }

  public emitSort(name: SortAction['name'], method: SortAction['method']): void {
    this.onSort.emit({ name, method });
  }
}
