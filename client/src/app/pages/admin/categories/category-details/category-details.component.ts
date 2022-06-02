import { Component } from '@angular/core';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-category-details',
  templateUrl: './category-details.component.html',
  standalone: true, 
  imports: [ShopifyButtonsModule]
})
export class CategoryDetailsComponent {}
