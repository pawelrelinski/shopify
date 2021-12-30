import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsCategoryPageRoutingModule } from './products-category-page-routing.module';
import { ProductsCategoryPageComponent } from './products-category-page.component';
import { ProductModule } from '@features/product/product.module';

@NgModule({
  declarations: [ProductsCategoryPageComponent],
  imports: [CommonModule, ProductsCategoryPageRoutingModule, ProductModule],
})
export class ProductsCategoryPageModule {}
