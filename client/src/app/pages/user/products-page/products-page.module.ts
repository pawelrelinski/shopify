import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {ProductsPageComponent} from './products-page.component';
import {ProductsPageRoutingModule} from './products-page-routing.module';
import {ProductModule} from '@features/product/product.module';


@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    ProductModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductsPageModule { }
