import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlyoutMenu } from '@features/layout/models';
import { Subject, takeUntil } from 'rxjs';
import {
  triggerDropdownMenu,
  triggerFlyoutMenu,
} from '@features/layout/components/layout-structrure/animations';
import { LayoutStructureInjectors } from '@features/layout/components/layout-structrure/layout-structure-injectors';

enum CartState {
  OPEN = 'open',
  CLOSE = 'close',
}

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './layout-structure.component.html',
  animations: [triggerFlyoutMenu, triggerDropdownMenu],
})
export class LayoutStructureComponent
  extends LayoutStructureInjectors
  implements OnInit, OnDestroy
{
  public mobileMenuIsOpen = false;
  public shoppingCartIsOpen!: boolean;

  public solutionsFlyoutMenuIsOpen = false;
  public moreFlyoutMenuIsOpen = false;
  public productsFlyoutMenuIsOpen = false;
  public profileFlyoutMenuIsOpen = false;

  public isLoggedIn = false;

  private readonly destroyed = new Subject<boolean>();

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.setIsLoggedIn();
    this.updateMobileMenuState();
    this.updateShoppingCartVisibility();
  }

  public ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  public get shoppingCartIsOpenTrigger(): CartState {
    return this.shoppingCartIsOpen ? CartState.OPEN : CartState.CLOSE;
  }

  public signOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  public toggleProfileFlyoutMenu(): void {
    this.profileFlyoutMenuIsOpen = !this.profileFlyoutMenuIsOpen;
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
    this.mobileMenuService.isOpen.pipe(takeUntil(this.destroyed)).subscribe((state: boolean) => {
      this.mobileMenuIsOpen = state;
    });
  }

  private updateShoppingCartVisibility(): void {
    this.shoppingCartVisibility.isVisibility
      .pipe(takeUntil(this.destroyed))
      .subscribe((visibility: boolean) => {
        this.shoppingCartIsOpen = visibility;
      });
  }

  private hideAllFlyoutMenus(): void {
    this.solutionsFlyoutMenuIsOpen = false;
    this.moreFlyoutMenuIsOpen = false;
    this.productsFlyoutMenuIsOpen = false;
    this.flyoutMenuService.changeFlyoutMenuState(FlyoutMenu.NONE);
  }

  private setIsLoggedIn(): void {
    this.authService.isLoggedIn().subscribe((isLogged: boolean) => {
      this.isLoggedIn = isLogged;
    });
  }
}
