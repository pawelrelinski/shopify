import { Component, OnInit } from '@angular/core';
import { FlyoutMenuService, MobileMenuService } from '@features/layout/services';
import { FlyoutMenu } from '@features/layout/models';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ShoppingCartVisibilityService } from '@features/shopping-cart/services';

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './layout-structure.component.html',
  animations: [
    trigger('flyoutMenu', [
      state(
        'show',
        style({
          opacity: 100,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('show => hide', animate('150ms ease-in')),
      transition('hide => show', animate('200ms ease-out')),
    ]),
  ],
})
export class LayoutStructureComponent implements OnInit {
  public mobileMenuIsOpen!: boolean;
  public shoppingCartIsOpen!: boolean;

  public solutionsFlyoutMenuIsOpen = false;
  public moreFlyoutMenuIsOpen = false;
  public productsFlyoutMenuIsOpen = false;

  constructor(
    private mobileMenuService: MobileMenuService,
    private flyoutMenuService: FlyoutMenuService,
    private shoppingCartVisibility: ShoppingCartVisibilityService
  ) {}

  public ngOnInit(): void {
    this.updateMobileMenuState();
    this.updateShoppingCartVisibility();
  }

  public openMobileMenu(): void {
    this.mobileMenuService.changeMenuState(true);
  }

  public openShoppingCart(): void {
    this.shoppingCartVisibility.changeShoppingCartVisibility(true);
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

  private updateShoppingCartVisibility(): void {
    this.shoppingCartVisibility.isVisibility.subscribe((visibility: boolean) => {
      this.shoppingCartIsOpen = visibility;
    });
  }

  private hideAllFlyoutMenus(): void {
    this.solutionsFlyoutMenuIsOpen = false;
    this.moreFlyoutMenuIsOpen = false;
    this.productsFlyoutMenuIsOpen = false;
    this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.NONE);
  }
}
