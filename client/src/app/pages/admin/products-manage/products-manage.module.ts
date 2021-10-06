import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsManageRoutingModule} from './products-manage-routing.module';
import {ProductsManageComponent} from './products-manage.component';
import {ProductModule} from '@features/product/product.module';


@NgModule({
  declarations: [
    ProductsManageComponent
  ],
  imports: [
    CommonModule,
    ProductsManageRoutingModule,
    ProductModule
  ]
})
export class ProductsManageModule { }
