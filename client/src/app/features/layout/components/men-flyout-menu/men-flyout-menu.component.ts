import {Component, OnInit} from '@angular/core';
import {Category, FlyoutMenuService, ProductCategoriesService} from '@features/layout/services';
import {FlyoutMenu} from '@features/layout/models';

@Component({
  selector: 'shopify-men-flyout-menu',
  templateUrl: './men-flyout-menu.component.html'
})
export class MenFlyoutMenuComponent implements OnInit {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu: boolean = false;
  public categoryDetails!: Category;

  constructor(private flyoutMenuService: FlyoutMenuService,
              private productCategoryService: ProductCategoriesService) {
  }

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
    this.getCategoryDetails();
  }

  public toggleFlyoutMenu(): void {
    if (this.showFlyoutMenu) {
      this.showFlyoutMenu = false;
    } else {
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.MEN);
      this.checkFlyoutMenuName();
    }
  }

  private updateFlyoutMenuName(): void {
    this.flyoutMenuService.flyoutMenu.subscribe((flyoutMenuName: FlyoutMenu) => {
      this.flyoutMenuName = flyoutMenuName;
      this.checkFlyoutMenuName();
    });
  }

  private checkFlyoutMenuName(): void {
    this.showFlyoutMenu = this.flyoutMenuName === FlyoutMenu.MEN;
  }

  private getCategoryDetails(): void {
    this.categoryDetails = this.productCategoryService.getMenCategory();
  }
}
