import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {
  ProductAvailableWidgetComponent,
  ProductFormComponent,
  ProductQuantityCounterComponent,
  ProductFileUploadComponent,
} from '@features/product/components';
import { StatusWidgetModule } from '@shared/status-widget/status-widget.module';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductOverviewModule } from '@features/product/components/product-overview/product-overview.module';
import { ProductListModule } from '@features/product/components/product-list/product-list.module';
import { ProductTableModule } from '@features/product/components/product-table/product-table.module';
import { NotificationModule } from '@features/notification/notification.module';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductAvailableWidgetComponent,
    ProductQuantityCounterComponent,
    ProductFileUploadComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    AngularEditorModule,
    StatusWidgetModule,
    ShopifyPaginationModule,
    ShopifyButtonsModule,
    PipesModule,
    MatDialogModule,
    ProductOverviewModule,
    ProductListModule,
    ProductTableModule,
    NotificationModule,
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
