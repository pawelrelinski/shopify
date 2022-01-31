import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from '@features/layout/services';
import { AuthService } from '@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'shopify-layout-mobile-menu',
  templateUrl: './layout-mobile-menu.component.html',
  styleUrls: ['./layout-mobile-menu.component.scss'],
})
export class LayoutMobileMenuComponent implements OnInit {
  public isLoggedIn = false;

  constructor(
    private mobileMenuService: MobileMenuService,
    private authService: AuthService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.mobileMenuService.changeMenuState(false);
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
