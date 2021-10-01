import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductOverviewPageRoutingModule} from './product-overview-page-routing.module';
import {ProductOverviewPageComponent} from './product-overview-page.component';
import {ProductModule} from '@features/product/product.module';


@NgModule({
  declarations: [
    ProductOverviewPageComponent
  ],
  imports: [
    CommonModule,
    ProductOverviewPageRoutingModule,
    ProductModule
  ]
})
export class ProductOverviewPageModule { }
