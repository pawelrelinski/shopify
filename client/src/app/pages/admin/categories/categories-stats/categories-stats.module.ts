import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesStatsRoutingModule } from './categories-stats-routing.module';
import { CategoriesStatsComponent } from './categories-stats.component';
import { CategoryModule } from '@features/category/category.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [CategoriesStatsComponent],
  imports: [CommonModule, CategoriesStatsRoutingModule, CategoryModule, ShopifyButtonsModule],
})
export class CategoriesStatsModule {}
