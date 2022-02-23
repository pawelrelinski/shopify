import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {
  ProductAvailableWidgetComponent,
  ProductFileUploadComponent,
  ProductHeaderWithTabsComponent,
  ProductMostPopularComponent,
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
import { NotificationModule } from '@features/notification/notification.module';
import { ProductCreateFormModule } from '@features/product/components/product-create-form/product-create-form.module';
import { ProductDetailsModule } from '@features/product/components/product-details/product-details.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ProductAvailableWidgetComponent,
    ProductQuantityCounterComponent,
    ProductFileUploadComponent,
    ProductMostPopularComponent,
    ProductHeaderWithTabsComponent,
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
    ProductCreateFormModule,
    ProductDetailsModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
  ],
  exports: [
    ProductAvailableWidgetComponent,
    ProductOverviewModule,
    ProductQuantityCounterComponent,
    ProductListModule,
    ProductTableModule,
    ProductCreateFormModule,
    ProductDetailsModule,
    ProductMostPopularComponent,
    ProductHeaderWithTabsComponent,
  ],
})
export class ProductModule {}
