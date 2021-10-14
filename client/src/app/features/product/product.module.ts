import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {ProductsListComponent} from '@features/product/components';
import {ProductsListElementComponent} from '@features/product/components';
import {ProductOverviewComponent} from '@features/product/components';
import {ProductPathComponent} from '@features/product/components';
import {ProductsListTableComponent} from '@features/product/components';
import {ProductsListTableRowComponent} from '@features/product/components';
import {ProductFormComponent} from '@features/product/components';
import {ProductsListTableActionsComponent} from '@features/product/components'
  ;
import {StatusWidgetModule} from '@shared/status-widget/status-widget.module';
import {ShopifyPaginationModule} from '@shared/shopify-pagination/shopify-pagination.module';
import {ShopifyButtonsModule} from '@shared/shopify-buttons/shopify-buttons.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListElementComponent,
    ProductOverviewComponent,
    ProductPathComponent,
    ProductsListTableComponent,
    ProductsListTableRowComponent,
    ProductFormComponent,
    ProductsListTableActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    StatusWidgetModule,
    ShopifyPaginationModule,
    ShopifyButtonsModule
  ],
  exports: [
    ProductsListComponent,
    ProductOverviewComponent,
    ProductsListTableComponent,
    ProductFormComponent,
    ProductsListTableActionsComponent
  ]
})
export class ProductModule {
}
