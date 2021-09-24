import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductsListElementComponent} from './components/products-list-element/products-list-element.component';
import {ProductOverviewComponent} from './components/product-overview/product-overview.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListElementComponent,
    ProductOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsListComponent,
    ProductOverviewComponent
  ]
})
export class ProductModule { }
