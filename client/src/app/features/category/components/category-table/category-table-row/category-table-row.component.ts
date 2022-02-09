import { Component, Input } from '@angular/core';
import { Category } from '@features/category/models';

@Component({
  selector: 'shopify-category-table-row',
  templateUrl: './category-table-row.component.html',
  styleUrls: ['./category-table-row.component.scss'],
})
export class CategoryTableRowComponent {
  @Input() category!: Category;

  @Input()
  set index(value: number) {
    this._index = ++value;
  }

  public get index(): number {
    return this._index;
  }

  private _index!: number;

  public dropdownMenuIsShow = false;

  public toggleDropdownMenu(): void {
    this.dropdownMenuIsShow = !this.dropdownMenuIsShow;
  }
}
