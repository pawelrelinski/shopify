import { Component } from '@angular/core';
import { ProductModule } from '@features/product/product.module';

@Component({
  selector: 'shopify-products-category-page',
  templateUrl: './products-category-page.component.html',
  standalone: true,
  imports: [ProductModule],
})
export class ProductsCategoryPageComponent {}
