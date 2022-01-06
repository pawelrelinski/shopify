import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  LayoutAdminNavigationComponent,
  LayoutBannerComponent,
  LayoutMobileMenuComponent,
  LayoutMoreFlyoutMenuComponent,
  LayoutProductsFlyoutMenuComponent,
  LayoutSolutionsFlyoutMenuComponent,
  LayoutStructureComponent,
  LayoutUserNavigationComponent,
} from '@features/layout/components';
import { ShoppingCartModule } from '@features/shopping-cart/shopping-cart.module';

@NgModule({
  declarations: [
    LayoutStructureComponent,
    LayoutBannerComponent,
    LayoutMobileMenuComponent,
    LayoutMoreFlyoutMenuComponent,
    LayoutSolutionsFlyoutMenuComponent,
    LayoutProductsFlyoutMenuComponent,
    LayoutUserNavigationComponent,
    LayoutAdminNavigationComponent,
  ],
  imports: [CommonModule, RouterModule, ShoppingCartModule],
  exports: [LayoutStructureComponent, LayoutAdminNavigationComponent],
})
export class LayoutModule {}
