import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';

import {
  ProductAvailableWidgetComponent,
  ProductFormComponent,
  ProductQuantityCounterComponent,
} from '@features/product/components';
import { StatusWidgetModule } from '@shared/status-widget/status-widget.module';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductOverviewModule } from '@features/product/components/product-overview/product-overview.module';
import { ProductListModule } from '@features/product/components/product-list/product-list.module';
import { ProductTableModule } from '@features/product/components/product-table/product-table.module';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductAvailableWidgetComponent,
    ProductQuantityCounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    StatusWidgetModule,
    ShopifyPaginationModule,
    ShopifyButtonsModule,
    PipesModule,
    MatDialogModule,
    ProductOverviewModule,
    ProductListModule,
    ProductTableModule,
  ],
  exports: [
    ProductFormComponent,
    ProductAvailableWidgetComponent,
    ProductOverviewModule,
    ProductQuantityCounterComponent,
    ProductListModule,
    ProductTableModule,
  ],
})
export class ProductModule {}
