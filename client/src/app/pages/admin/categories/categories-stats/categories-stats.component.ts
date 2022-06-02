import { Component } from '@angular/core';
import { CategoryModule } from '@features/category/category.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-categories-stats',
  templateUrl: './categories-stats.component.html',
  standalone: true,
  imports: [CategoryModule, ShopifyButtonsModule],
})
export class CategoriesStatsComponent {}
