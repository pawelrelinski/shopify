import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ProductListComponent,
  ProductListElementComponent,
  ProductTableComponent,
} from '@features/product/components';
import { ProductTableRowComponent } from '@features/product/components';
import { ProductFormComponent } from '@features/product/components';
import { ProductAvailableWidgetComponent } from '@features/product/components';
import { ProductTableActionsComponent } from '@features/product/components';
import { StatusWidgetModule } from '@shared/status-widget/status-widget.module';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductListPaginationComponent } from '@features/product/components';
import { ProductListHeaderComponent } from '@features/product/components';
import { ProductOverviewComponent } from '@features/product/components';

@NgModule({
  declarations: [
    ProductTableComponent,
    ProductTableRowComponent,
    ProductFormComponent,
    ProductTableActionsComponent,
    ProductAvailableWidgetComponent,
    ProductListComponent,
    ProductListElementComponent,
    ProductListPaginationComponent,
    ProductListHeaderComponent,
    ProductOverviewComponent,
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
    ProductTableComponent,
    ProductFormComponent,
    ProductTableActionsComponent,
    ProductAvailableWidgetComponent,
    ProductListComponent,
    ProductOverviewComponent,
  ],
})
export class ProductModule {}
