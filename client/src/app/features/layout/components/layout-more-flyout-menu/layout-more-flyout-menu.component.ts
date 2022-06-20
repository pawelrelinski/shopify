import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FlyoutMenuService } from '@features/layout/services';
import { FlyoutMenu } from '@features/layout/models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'shopify-layout-more-flyout-menu',
  templateUrl: './layout-more-flyout-menu.component.html',
  styleUrls: ['./layout-more-flyout-menu.component.scss'],
})
export class LayoutMoreFlyoutMenuComponent implements OnInit, OnDestroy {
  public flyoutMenuName!: FlyoutMenu;
  public showFlyoutMenu: boolean = false;

  private readonly destroyed = new Subject<boolean>();
  private flyoutMenuService = inject(FlyoutMenuService);

  public ngOnInit(): void {
    this.updateFlyoutMenuName();
  }

  public ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  public toggleFlyoutMenu(): void {
    if (this.showFlyoutMenu) {
      this.showFlyoutMenu = false;
    } else {
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.MORE);
      this.checkFlyoutMenuName();
    }
  }

  private updateFlyoutMenuName(): void {
    this.flyoutMenuService.flyoutMenu
      .pipe(takeUntil(this.destroyed))
      .subscribe((flyoutMenuName: FlyoutMenu) => {
        this.flyoutMenuName = flyoutMenuName;
        this.checkFlyoutMenuName();
      });
  }

  private checkFlyoutMenuName(): void {
    this.showFlyoutMenu = this.flyoutMenuName === FlyoutMenu.MORE;
  }
}
