import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from '@features/product/components/product-table/product-table/product-table.component';
import { ProductTableActionsComponent } from '@features/product/components/product-table/product-table-actions/product-table-actions.component';
import { ProductTableRowComponent } from '@features/product/components/product-table/product-table-row/product-table-row.component';
import { ShopifyPaginationModule } from '@shared/shopify-pagination/shopify-pagination.module';
import { RouterModule } from '@angular/router';
import { StatusWidgetModule } from '@shared/status-widget/status-widget.module';
import { PipesModule } from '@core/pipes/pipes.module';
import { ProductTableRemoveDialogComponent } from '@features/product/components/product-table/product-table-remove-dialog/product-table-remove-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ProductTableComponent,
    ProductTableActionsComponent,
    ProductTableRowComponent,
    ProductTableRemoveDialogComponent,
  ],
  imports: [
    CommonModule,
    ShopifyPaginationModule,
    RouterModule,
    StatusWidgetModule,
    PipesModule,
    MatDialogModule,
  ],
  exports: [ProductTableComponent],
})
export class ProductTableModule {}
