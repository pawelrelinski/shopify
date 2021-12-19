import { Component, OnInit } from '@angular/core';
import { FlyoutMenuService, MobileMenuService } from '@features/layout/services';
import { FlyoutMenu } from '@features/layout/models';

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './structure.component.html',
})
export class StructureComponent implements OnInit {
  public mobileMenuIsOpen!: boolean;

  public solutionsFlyoutMenuIsOpen = false;
  public moreFlyoutMenuIsOpen = false;
  public productsFlyoutMenuIsOpen = false;

  constructor(
    private mobileMenuService: MobileMenuService,
    private flyoutMenuService: FlyoutMenuService
  ) {}

  public ngOnInit(): void {
    this.updateMobileMenuState();
  }

  public openMobileMenu(): void {
    this.mobileMenuService.changeMenuState(true);
  }

  public toggleSolutionsFlyoutMenu(): void {
    if (this.solutionsFlyoutMenuIsOpen) {
      this.hideAllFlyoutMenus();
    } else {
      this.hideAllFlyoutMenus();
      this.solutionsFlyoutMenuIsOpen = true;
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.SOLUTIONS);
    }
  }

  public toggleMoreFlyoutMenu(): void {
    if (this.moreFlyoutMenuIsOpen) {
      this.hideAllFlyoutMenus();
    } else {
      this.hideAllFlyoutMenus();
      this.moreFlyoutMenuIsOpen = true;
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.MORE);
    }
  }

  public toggleProductsFlyoutMenu(): void {
    if (this.productsFlyoutMenuIsOpen) {
      this.hideAllFlyoutMenus();
    } else {
      this.hideAllFlyoutMenus();
      this.productsFlyoutMenuIsOpen = true;
      this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.PRODUCTS);
    }
  }

  private updateMobileMenuState(): void {
    this.mobileMenuService.isOpen.subscribe((state: boolean) => {
      this.mobileMenuIsOpen = state;
    });
  }

  private hideAllFlyoutMenus(): void {
    this.solutionsFlyoutMenuIsOpen = false;
    this.moreFlyoutMenuIsOpen = false;
    this.productsFlyoutMenuIsOpen = false;
    this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.NONE);
  }
}
