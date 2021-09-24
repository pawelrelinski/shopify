import {Component, OnInit} from '@angular/core';
import {FlyoutMenu} from '@features/layout/models';
import {Category, FlyoutMenuService, ProductCategoriesService} from '@features/layout/services';

@Component({
  selector: 'shopify-women-flyout-menu',
  templateUrl: './women-flyout-menu.component.html'
})
export class WomenFlyoutMenuComponent implements OnInit {
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
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.WOMEN);
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
    this.showFlyoutMenu = this.flyoutMenuName === FlyoutMenu.WOMEN;
  }

  private getCategoryDetails(): void {
    this.categoryDetails = this.productCategoryService.getWomenCategory();
  }
}
