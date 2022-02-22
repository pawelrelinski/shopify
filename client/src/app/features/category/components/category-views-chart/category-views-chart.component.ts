import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@features/category/services';
import { map } from 'rxjs';
import { Category } from '@features/category/models';

@Component({
  selector: 'shopify-category-views-chart',
  templateUrl: './category-views-chart.component.html',
  styleUrls: ['./category-views-chart.component.scss'],
})
export class CategoryViewsChartComponent implements OnInit {
  public formatCategoriesData!: { name: string; value: number }[];

  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = true;
  public showYAxisLabel = true;

  constructor(private categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.setFormatCategoriesData();
  }

  private setFormatCategoriesData(): void {
    this.categoryService
      .getAllWithViewsCount()
      .pipe(
        map((categories: (Category & { viewsCount: number })[]) => {
          return categories.map((category: Category & { viewsCount: number }) => {
            return {
              name: category.name,
              value: category.viewsCount,
            };
          });
        })
      )
      .subscribe((formatCategories: { name: string; value: number }[]) => {
        this.formatCategoriesData = formatCategories;
      });
  }
}
