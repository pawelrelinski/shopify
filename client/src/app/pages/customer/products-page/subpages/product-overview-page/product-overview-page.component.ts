import { Component } from '@angular/core';
import { ProductModule } from '@features/product/product.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-product-overview-page',
  templateUrl: './product-overview-page.component.html',
  standalone: true,
  imports: [ProductModule, ShopifyButtonsModule],
})
export class ProductOverviewPageComponent {}
