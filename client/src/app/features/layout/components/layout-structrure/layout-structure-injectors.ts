import { FlyoutMenuService, MobileMenuService } from '@features/layout/services';
import { ShoppingCartVisibilityService } from '@features/shopping-cart/services';
import { AuthService } from '@core/services';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export abstract class LayoutStructureInjectors {
  protected readonly mobileMenuService = inject(MobileMenuService);
  protected readonly flyoutMenuService = inject(FlyoutMenuService);
  protected readonly shoppingCartVisibility = inject(ShoppingCartVisibilityService);
  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);
}
