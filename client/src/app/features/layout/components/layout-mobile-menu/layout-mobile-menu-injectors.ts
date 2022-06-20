import { inject } from '@angular/core';
import { MobileMenuService } from '@features/layout/services';
import { AuthService } from '@core/services';
import { Router } from '@angular/router';

export abstract class LayoutMobileMenuInjectors {
  protected readonly mobileMenuService = inject(MobileMenuService);
  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);
}
