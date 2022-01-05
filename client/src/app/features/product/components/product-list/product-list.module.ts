import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '@features/product/components/product-list/product-list/product-list.component';
import { ProductListElementComponent } from '@features/product/components/product-list/product-list-element/product-list-element.component';
import { ProductListPaginationComponent } from '@features/product/components/product-list/product-list-pagination/product-list-pagination.component';
import { ProductListHeaderComponent } from '@features/product/components/product-list/product-list-header/product-list-header.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListElementComponent,
    ProductListHeaderComponent,
    ProductListPaginationComponent,
  ],
  imports: [CommonModule, PipesModule, RouterModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
