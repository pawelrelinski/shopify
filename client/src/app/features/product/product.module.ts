import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {ProductsListComponent} from '@features/product/components';
import {ProductsListElementComponent} from '@features/product/components';
import {ProductOverviewComponent} from '@features/product/components';
import {ProductPathComponent} from '@features/product/components';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListElementComponent,
    ProductOverviewComponent,
    ProductPathComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    ProductsListComponent,
    ProductOverviewComponent
  ]
})
export class ProductModule {
}
