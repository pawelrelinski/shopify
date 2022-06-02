import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortAction } from '@features/product/models';
import { Category } from '@features/category/models';
import { triggerDropdownMenu } from '@features/product/components';

@Component({
  selector: 'shopify-product-list-header',
  templateUrl: './product-list-header.component.html',
  animations: [triggerDropdownMenu],
})
export class ProductListHeaderComponent {
  @Input() category!: Category | null;
  @Input() categories!: Category[] | null;
  @Input() showCategoryDropdownMenu!: boolean;
  @Output() onSort: EventEmitter<SortAction> = new EventEmitter<SortAction>();

  public sortDropdownMenuIsOpen = false;
  public categoryDropdownMenuIsOpen = false;
  public mobileFiltersIsOpen = false;

  public selectedSortMethod = '';

  public toggleSortDropDownMenu(): void {
    this.sortDropdownMenuIsOpen = !this.sortDropdownMenuIsOpen;
  }

  public toggleCategoryDropdownMenuIsOpen(): void {
    this.categoryDropdownMenuIsOpen = !this.categoryDropdownMenuIsOpen;
  }

  public openMobileFilters(): void {
    this.mobileFiltersIsOpen = true;
  }

  public closeMobileFilters(): void {
    this.mobileFiltersIsOpen = false;
  }

  public emitSort(
    name: SortAction['name'],
    method: SortAction['method'],
    selectedSortMethod?: string
  ): void {
    this.onSort.emit({ name, method });
    this.sortDropdownMenuIsOpen = false;
    if (selectedSortMethod) {
      this.selectedSortMethod = selectedSortMethod;
    }
  }
}
