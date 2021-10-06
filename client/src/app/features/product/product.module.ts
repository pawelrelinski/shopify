import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {ProductsListComponent} from '@features/product/components';
import {ProductsListElementComponent} from '@features/product/components';
import {ProductOverviewComponent} from '@features/product/components';
import {ProductPathComponent} from '@features/product/components';
import {ProductsListTableComponent} from '@features/product/components';
import {ProductsListTableRowComponent} from '@features/product/components';
import {StatusWidgetModule} from '@shared/status-widget/status-widget.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListElementComponent,
    ProductOverviewComponent,
    ProductPathComponent,
    ProductsListTableComponent,
    ProductsListTableRowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    StatusWidgetModule
  ],
  exports: [
    ProductsListComponent,
    ProductOverviewComponent,
    ProductsListTableComponent
  ]
})
export class ProductModule {
}
