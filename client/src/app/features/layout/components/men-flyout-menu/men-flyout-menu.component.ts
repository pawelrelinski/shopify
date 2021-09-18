import {Component, OnInit} from '@angular/core';
import {FlyoutMenuService} from '@features/layout/services';
import {FlyoutMenu} from '@features/layout/models';

@Component({
  selector: 'shopify-men-flyout-menu',
  templateUrl: './men-flyout-menu.component.html'
})
export class MenFlyoutMenuComponent implements OnInit {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu!: boolean;

  constructor(private flyoutMenuService: FlyoutMenuService) {
  }

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
    this.checkFlyoutMenuName();
  }

  public changeFlyoutMenuToMen(): void {
    this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.MEN);
  }

  private updateFlyoutMenuName(): void {
    this.flyoutMenuService.flyoutMenu.subscribe((flyoutMenuName: FlyoutMenu) => {
      this.flyoutMenuName = flyoutMenuName;
    });
  }

  private checkFlyoutMenuName(): void {
    if (this.flyoutMenuName === FlyoutMenu.MEN) {
      this.showFlyoutMenu = true;
    }
  }
}
