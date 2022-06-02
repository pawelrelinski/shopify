import { Component } from '@angular/core';
import { ProductModule } from '@features/product/product.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-products-manage',
  templateUrl: './products-manage.component.html',
  standalone: true,
  imports: [ProductModule, ShopifyButtonsModule],
})
export class ProductsManageComponent {}
