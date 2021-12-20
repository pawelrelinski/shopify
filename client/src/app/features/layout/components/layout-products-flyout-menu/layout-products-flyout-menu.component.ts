import { Component, OnInit } from '@angular/core';
import { FlyoutMenu } from '@features/layout/models';
import { FlyoutMenuService } from '@features/layout/services';

@Component({
  selector: 'shopify-layout-products-flyout-menu',
  templateUrl: './layout-products-flyout-menu.component.html',
  styleUrls: ['./layout-products-flyout-menu.component.scss'],
})
export class LayoutProductsFlyoutMenuComponent implements OnInit {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu: boolean = false;

  constructor(private flyoutMenuService: FlyoutMenuService) {}

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
  }

  public toggleFlyoutMenu(): void {
    if (this.showFlyoutMenu) {
      this.showFlyoutMenu = false;
    } else {
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.PRODUCTS);
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
    this.showFlyoutMenu = this.flyoutMenuName === FlyoutMenu.PRODUCTS;
  }
}
