import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  LayoutAdminNavigationComponent,
  LayoutBannerComponent,
  LayoutMobileMenuComponent,
  LayoutMoreFlyoutMenuComponent,
  LayoutProductsFlyoutMenuComponent,
  LayoutProfileFlyoutMenuComponent,
  LayoutSolutionsFlyoutMenuComponent,
  LayoutStructureComponent,
} from '@features/layout/components';
import { ShoppingCartModule } from '@features/shopping-cart/shopping-cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LayoutStructureComponent,
    LayoutBannerComponent,
    LayoutMobileMenuComponent,
    LayoutMoreFlyoutMenuComponent,
    LayoutSolutionsFlyoutMenuComponent,
    LayoutProductsFlyoutMenuComponent,
    LayoutAdminNavigationComponent,
    LayoutProfileFlyoutMenuComponent,
  ],
  imports: [CommonModule, RouterModule, ShoppingCartModule, BrowserModule, BrowserAnimationsModule],
  exports: [LayoutStructureComponent, LayoutAdminNavigationComponent],
})
export class LayoutModule {}
