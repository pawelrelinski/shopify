import { Component, EventEmitter, Output } from '@angular/core';
import { SortOptions } from '@features/product/models';

@Component({
  selector: 'shopify-product-table-actions',
  templateUrl: './product-table-actions.component.html',
})
export class ProductTableActionsComponent {
  @Output('onSortBy')
  sortEmitter: EventEmitter<SortOptions> = new EventEmitter<SortOptions>();

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

  public changeSortBy(value: string): void {
    const splitValue: Array<string> = value.split('-');
    const sortEmitter: SortOptions = {
      by: splitValue[0],
      method: splitValue[1],
    };
    this.sortEmitter.emit(sortEmitter);
  }
}
