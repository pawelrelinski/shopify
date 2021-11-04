import {Component, EventEmitter, Output} from '@angular/core';

export interface SortOptions {
  by: string;
  method: string;
}

@Component({
  selector: 'shopify-products-table-actions',
  templateUrl: './products-table-actions.component.html',
  styleUrls: ['./products-table-actions.component.scss']
})
export class ProductsTableActionsComponent {
  @Output('onSortBy')
  sortEmitter: EventEmitter<SortOptions> = new EventEmitter<SortOptions>();

  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

  public changeSortBy(value: string): void {
    const splitValue: Array<string> = value.split('-');
    const sortEmitter: SortOptions = {
      by: splitValue[0],
      method: splitValue[1]
    };
    this.sortEmitter.emit(sortEmitter);
  }
}
