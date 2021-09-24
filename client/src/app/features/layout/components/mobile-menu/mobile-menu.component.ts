import {Component, OnInit} from '@angular/core';
import {Category, ProductCategoriesService} from "@features/layout/services";


@Component({
  selector: 'shopify-mobile-menu',
  templateUrl: './mobile-menu.component.html'
})
export class MobileMenuComponent implements OnInit{
  public menMenuIsOpen = false;
  public womenMenuIsOpen = true;
  public categoriesDetails!: { men: Category } & { women: Category };

  constructor(private productCategoryService: ProductCategoriesService) {
  }

  public ngOnInit(): void {
    this.getCategoriesDetails();
  }

  public openWomenMenu(): void {
    if (!this.womenMenuIsOpen) {
      this.womenMenuIsOpen = true;
      this.menMenuIsOpen = false;
    }
  }

  public openMenMenu(): void {
    if (!this.menMenuIsOpen) {
      this.menMenuIsOpen = true;
      this.womenMenuIsOpen = false;
    }
  }

  private getCategoriesDetails(): void {
    this.categoriesDetails = this.productCategoryService.getAllCategories();
  }
}
