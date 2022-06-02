import { Component } from '@angular/core';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';
import { ProductModule } from '@features/product/product.module';

@Component({
  selector: 'shopify-product-details-page',
  templateUrl: './product-details.component.html',
  standalone: true,
  imports: [ShopifyButtonsModule, ProductModule],
})
export class ProductDetailsComponent {}
