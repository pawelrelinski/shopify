import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  LayoutBannerComponent,
  LayoutMobileMenuComponent,
  LayoutMoreFlyoutMenuComponent,
  LayoutProductsFlyoutMenuComponent,
  LayoutSolutionsFlyoutMenuComponent,
  LayoutStructureComponent,
} from '@features/layout/components';
import { ShoppingCartModule } from '@features/shopping-cart/shopping-cart.module';
import { LayoutUserNavigationComponent } from './components/layout-user-navigation/layout-user-navigation.component';
import { LayoutAdminNavigationComponent } from './components/layout-admin-navigation/layout-admin-navigation.component';

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
  exports: [LayoutStructureComponent],
})
export class LayoutModule {}
