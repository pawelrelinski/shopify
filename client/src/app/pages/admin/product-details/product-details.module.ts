import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductDetailsComponent} from './product-details.component';
import {ProductDetailsRoutingModule} from './product-details-routing.module';
import {ShopifyButtonsModule} from '@shared/shopify-buttons/shopify-buttons.module';


@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    ShopifyButtonsModule
  ]
})
export class ProductDetailsModule { }
