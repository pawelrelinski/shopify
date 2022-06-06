import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '@features/category/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'shopify-category-count-widget',
  templateUrl: './category-count-widget.component.html',
  styleUrls: ['./category-count-widget.component.scss'],
})
export class CategoryCountWidgetComponent implements OnInit {
  public count$!: Observable<number>;

  private categoryService = inject(CategoryService);

  public ngOnInit(): void {
    this.count$ = this.categoryService.getCount();
  }
}
