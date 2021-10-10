import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreateProductRoutingModule} from './create-product-routing.module';
import {CreateProductComponent} from './create-product.component';
import {ProductModule} from '@features/product/product.module';


@NgModule({
  declarations: [
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    CreateProductRoutingModule,
    ProductModule
  ]
})
export class CreateProductModule { }
