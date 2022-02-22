import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryDetailsRoutingModule } from './category-details-routing.module';
import { CategoryDetailsComponent } from './category-details.component';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [CategoryDetailsComponent],
  imports: [CommonModule, CategoryDetailsRoutingModule, ShopifyButtonsModule],
})
export class CategoryDetailsModule {}
