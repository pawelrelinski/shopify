import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductOverviewPageRoutingModule} from './product-overview-page-routing.module';
import {ProductOverviewPageComponent} from './product-overview-page.component';
import {ProductModule} from '@features/product/product.module';
import {ShopifyButtonsModule} from '@shared/shopify-buttons/shopify-buttons.module';


@NgModule({
  declarations: [
    ProductOverviewPageComponent
  ],
  imports: [
    CommonModule,
    ProductOverviewPageRoutingModule,
    ProductModule,
    ShopifyButtonsModule
  ]
})
export class ProductOverviewPageModule {
}
