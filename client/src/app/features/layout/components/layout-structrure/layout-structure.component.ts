import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlyoutMenuService, MobileMenuService } from '@features/layout/services';
import { FlyoutMenu } from '@features/layout/models';
import { ShoppingCartVisibilityService } from '@features/shopping-cart/services';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from '@core/services';
import { Router } from '@angular/router';
import {
  triggerDropdownMenu,
  triggerFlyoutMenu,
} from '@features/layout/components/layout-structrure/animations';

@Component({
  selector: 'shopify-layout-structure',
  templateUrl: './layout-structure.component.html',
  animations: [triggerFlyoutMenu, triggerDropdownMenu],
})
export class LayoutStructureComponent implements OnInit, OnDestroy {
  public mobileMenuIsOpen = false;
  public shoppingCartIsOpen!: boolean;

  public solutionsFlyoutMenuIsOpen = false;
  public moreFlyoutMenuIsOpen = false;
  public productsFlyoutMenuIsOpen = false;
  public profileFlyoutMenuIsOpen = false;

  public isLoggedIn = false;

  private readonly destroyed = new Subject<boolean>();

  constructor(
    private mobileMenuService: MobileMenuService,
    private flyoutMenuService: FlyoutMenuService,
    private shoppingCartVisibility: ShoppingCartVisibilityService,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.setIsLoggedIn();
    this.updateMobileMenuState();
    this.updateShoppingCartVisibility();
  }

  public ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  public get shoppingCartIsOpenTrigger(): 'open' | 'close' {
    return this.shoppingCartIsOpen ? 'open' : 'close';
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
