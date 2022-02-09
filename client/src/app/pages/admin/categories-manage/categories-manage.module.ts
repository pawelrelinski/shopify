import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesManageRoutingModule } from './categories-manage-routing.module';
import { CategoriesManageComponent } from './categories-manage.component';
import { CategoryModule } from '@features/category/category.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@NgModule({
  declarations: [CategoriesManageComponent],
  imports: [CommonModule, CategoriesManageRoutingModule, CategoryModule, ShopifyButtonsModule],
})
export class CategoriesManageModule {}
