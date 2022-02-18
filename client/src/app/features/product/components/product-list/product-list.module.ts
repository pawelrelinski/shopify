import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListElementComponent } from './product-list-element/product-list-element.component';
import { ProductListPaginationComponent } from './product-list-pagination/product-list-pagination.component';
import { ProductListHeaderComponent } from './product-list-header/product-list-header.component';
import { PipesModule } from '@core/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductListElementComponent,
    ProductListHeaderComponent,
    ProductListPaginationComponent,
  ],
  imports: [CommonModule, PipesModule, RouterModule, MatProgressSpinnerModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}
