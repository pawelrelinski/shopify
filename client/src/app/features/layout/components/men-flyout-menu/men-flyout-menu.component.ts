import {Component, OnInit} from '@angular/core';
import {FlyoutMenuService} from '@features/layout/services';
import {FlyoutMenu} from '@features/layout/models';

@Component({
  selector: 'shopify-men-flyout-menu',
  templateUrl: './men-flyout-menu.component.html'
})
export class MenFlyoutMenuComponent implements OnInit {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu: boolean = false;

  constructor(private flyoutMenuService: FlyoutMenuService) {
  }

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
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
}
