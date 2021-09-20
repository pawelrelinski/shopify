import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './components/products-list/products-list.component';
import { ProductsListElementComponent } from './components/products-list-element/products-list-element.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductsListComponent]
})
export class ProductModule { }
