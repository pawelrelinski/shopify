import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {ProductsListComponent} from '@features/product/components';
import {ProductsListElementComponent} from '@features/product/components';
import {ProductOverviewComponent} from '@features/product/components';
import {ProductPathComponent} from '@features/product/components';
import {ProductsTableComponent} from '@features/product/components';
import {ProductsTableRowComponent} from '@features/product/components';
import {ProductFormComponent} from '@features/product/components';
import {AvailableProductsWidgetComponent} from '@features/product/components';
import {ProductsTableActionsComponent} from '@features/product/components';
import {ProductsListActionsComponent} from '@features/product/components';
import {StatusWidgetModule} from '@shared/status-widget/status-widget.module';
import {ShopifyPaginationModule} from '@shared/shopify-pagination/shopify-pagination.module';
import {ShopifyButtonsModule} from '@shared/shopify-buttons/shopify-buttons.module';
import {PipesModule} from '@core/pipes/pipes.module';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsListElementComponent,
    ProductOverviewComponent,
    ProductPathComponent,
    ProductsTableComponent,
    ProductsTableRowComponent,
    ProductFormComponent,
    ProductsTableActionsComponent,
    AvailableProductsWidgetComponent,
    ProductsListActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    StatusWidgetModule,
    ShopifyPaginationModule,
    ShopifyButtonsModule,
    PipesModule
  ],
  exports: [
    ProductsListComponent,
    ProductOverviewComponent,
    ProductsTableComponent,
    ProductFormComponent,
    ProductsTableActionsComponent,
    AvailableProductsWidgetComponent
  ]
})
export class ProductModule {
}
