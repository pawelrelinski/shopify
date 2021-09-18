import {Component} from '@angular/core';
import {FlyoutMenu} from '@features/layout/models';
import {FlyoutMenuService} from '@features/layout/services';

@Component({
  selector: 'shopify-women-flyout-menu',
  templateUrl: './women-flyout-menu.component.html'
})
export class WomenFlyoutMenuComponent {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu!: boolean;

  constructor(private flyoutMenuService: FlyoutMenuService) {
  }

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
    this.checkFlyoutMenuName();
  }

  public changeFlyoutMenuToWomen(): void {
    this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.WOMEN);
  }

  private updateFlyoutMenuName(): void {
    this.flyoutMenuService.flyoutMenu.subscribe((flyoutMenuName: FlyoutMenu) => {
      this.flyoutMenuName = flyoutMenuName;
    });
  }

  private checkFlyoutMenuName(): void {
    if (this.flyoutMenuName === FlyoutMenu.WOMEN) {
      this.showFlyoutMenu = true;
    }
  }
}
