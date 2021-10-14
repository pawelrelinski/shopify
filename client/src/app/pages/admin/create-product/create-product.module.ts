import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateProductRoutingModule} from './create-product-routing.module';
import {CreateProductComponent} from './create-product.component';
import {ProductModule} from '@features/product/product.module';
import {ShopifyButtonsModule} from '@shared/shopify-buttons/shopify-buttons.module';


@NgModule({
  declarations: [
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    ProductModule,
    ShopifyButtonsModule
  ]
})
export class CreateProductModule { }
