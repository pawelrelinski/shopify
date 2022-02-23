import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProductRoutingModule } from './edit-product-routing.module';
import { EditProductComponent } from './edit-product.component';
import { ProductModule } from '@features/product/product.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [EditProductComponent],
  imports: [CommonModule, EditProductRoutingModule, ProductModule, ShopifyButtonsModule],
})
export class EditProductModule {}
