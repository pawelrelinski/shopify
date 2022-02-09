import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@features/category/services';

@Component({
  selector: 'shopify-category-count-widget',
  templateUrl: './category-count-widget.component.html',
  styleUrls: ['./category-count-widget.component.scss'],
})
export class CategoryCountWidgetComponent implements OnInit {
  public count!: number;

  constructor(private categoryService: CategoryService) {}

  public ngOnInit(): void {
    this.setCategoriesCount();
  }

  private setCategoriesCount(): void {
    this.categoryService.getCount().subscribe((count: number) => {
      this.count = count;
    });
  }
}
