import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsTableComponent } from '@features/product/components';
import { ProductsTableRowComponent } from '@features/product/components';
import { ProductFormComponent } from '@features/product/components';
import { AvailableProductsWidgetComponent } from '@features/product/components';
import { ProductsTableActionsComponent } from '@features/product/components';
import { StatusWidgetModule } from '@shared/status-widget/status-widget.module';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductsListComponent } from '@features/product/components';
import { ProductsListElementComponent } from '@features/product/components';

@NgModule({
  declarations: [
    ProductsTableComponent,
    ProductsTableRowComponent,
    ProductFormComponent,
    ProductsTableActionsComponent,
    AvailableProductsWidgetComponent,
    ProductsListComponent,
    ProductsListElementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    StatusWidgetModule,
    ShopifyPaginationModule,
    ShopifyButtonsModule,
    PipesModule,
  ],
  exports: [
    ProductsTableComponent,
    ProductFormComponent,
    ProductsTableActionsComponent,
    AvailableProductsWidgetComponent,
    ProductsListComponent,
  ],
})
export class ProductModule {}
