import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsPageComponent} from './products-page.component';
import {ProductsPageRoutingModule} from './products-page-routing.module';



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
