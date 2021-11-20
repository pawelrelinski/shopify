import {Component, EventEmitter, Output} from '@angular/core';
import {SortOptions} from '@features/product/components';

@Component({
  selector: 'shopify-products-list-actions',
  templateUrl: './products-list-actions.component.html',
  styleUrls: ['./products-list-actions.component.scss']
})
export class ProductsListActionsComponent {
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
      method: splitValue[1]
    };
    this.sortEmitter.emit(sortEmitter);
  }
}
