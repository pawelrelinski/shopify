import { Component, OnInit } from '@angular/core';
import { LayoutMobileMenuInjectors } from './layout-mobile-menu-injectors';

@Component({
  selector: 'shopify-layout-mobile-menu',
  templateUrl: './layout-mobile-menu.component.html',
})
export class LayoutMobileMenuComponent extends LayoutMobileMenuInjectors implements OnInit {
  public isLoggedIn = false;

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.close();
    this.setIsLoggedIn();
  }

  public close(): void {
    this.mobileMenuService.changeMenuState(false);
  }

  public signOut(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  private setIsLoggedIn(): void {
    this.authService.isLoggedIn().subscribe((isLogged: boolean) => {
      this.isLoggedIn = isLogged;
    });
  }
}
