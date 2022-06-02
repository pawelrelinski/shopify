import { Component } from '@angular/core';

import { ProductFormMode } from '@features/product/models';
import { ProductModule } from '@features/product/product.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-create-product',
  templateUrl: './create-product.component.html',
  standalone: true,
  imports: [ProductModule, ShopifyButtonsModule],
})
export class CreateProductComponent {
  public formMode: ProductFormMode = ProductFormMode.CREATE;
}
