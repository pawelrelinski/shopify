import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsManageRoutingModule} from './products-manage-routing.module';
import {ProductsManageComponent} from './products-manage.component';
import {ProductModule} from '@features/product/product.module';
import {ShopifyButtonsModule} from '@shared/shopify-buttons/shopify-buttons.module';


@NgModule({
  declarations: [
    ProductsManageComponent
  ],
  imports: [
    CommonModule,
    ProductsManageRoutingModule,
    ProductModule,
    ShopifyButtonsModule
  ]
})
export class ProductsManageModule { }
