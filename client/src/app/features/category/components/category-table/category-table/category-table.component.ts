import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@features/category/services';
import { Category, CategoryWithProductsCount } from '@features/category/models';

@Component({
  selector: 'shopify-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent implements OnInit {
  public categories!: CategoryWithProductsCount[];
  public currentPage = 1;

  constructor(private categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.setAllCategories();
  }

  public trackByCategoryId(index: number, category: Category): Category['id'] {
    return category.id;
  }

  public getIndexForTableRow(value: number): number {
    return this.currentPage > 1 ? value + (this.currentPage - 1) * 10 : value;
  }

  private setAllCategories(): void {
    this.categoryService
      .getAllWithProductCount()
      .subscribe((categories: CategoryWithProductsCount[]) => {
        this.categories = categories;
      });
  }
}
