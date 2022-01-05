import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ProductAvailableWidgetComponent,
  ProductFormComponent,
  ProductListComponent,
  ProductListElementComponent,
  ProductListHeaderComponent,
  ProductListPaginationComponent,
  ProductOverviewComponent,
  ProductOverviewHeaderComponent,
  ProductOverviewSpecificationComponent,
  ProductQuantityCounterComponent,
  ProductRemoveDialogComponent,
  ProductTableActionsComponent,
  ProductTableComponent,
  ProductTableRowComponent,
} from '@features/product/components';
import { StatusWidgetModule } from '@shared/status-widget/status-widget.module';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductOverviewFeaturesComponent } from './components/product-overview-features/product-overview-features.component';
import { MatDialogModule } from '@angular/material/dialog';

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
    ProductOverviewHeaderComponent,
    ProductOverviewFeaturesComponent,
    ProductOverviewSpecificationComponent,
    ProductQuantityCounterComponent,
    ProductRemoveDialogComponent,
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
    MatDialogModule,
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
