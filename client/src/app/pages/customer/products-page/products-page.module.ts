import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';


@NgModule({
  declarations: [
    ProductsPageComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule
  ]
})
export class ProductsPageModule { }
