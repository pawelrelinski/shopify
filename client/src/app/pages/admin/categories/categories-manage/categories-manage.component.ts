import { Component } from '@angular/core';
import { CategoryModule } from '@features/category/category.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-categories-manage',
  templateUrl: './categories-manage.component.html',
  standalone: true,
  imports: [CategoryModule, ShopifyButtonsModule],
})
export class CategoriesManageComponent {}
