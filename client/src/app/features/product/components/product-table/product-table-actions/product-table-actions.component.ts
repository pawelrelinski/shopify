import { Component, EventEmitter, Output } from '@angular/core';
import { SortAction } from '@features/product/models';

@Component({
  selector: 'shopify-product-table-actions',
  templateUrl: './product-table-actions.component.html',
})
export class ProductTableActionsComponent {
  @Output() onSort: EventEmitter<SortAction> = new EventEmitter<SortAction>();

  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

  public showMenu(): void {
    this.isOpen = true;
  }

  public hideMenu(): void {
    this.isOpen = false;
  }

  public emitSort(name: SortAction['name'], method: SortAction['method']): void {
    this.onSort.emit({ name, method });
  }
}
