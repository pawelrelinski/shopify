import { Component } from '@angular/core';

import { ProductFormMode } from '@features/product/models';
import { ProductModule } from '@features/product/product.module';
import { ShopifyButtonsModule } from '@shared/shopify-buttons/shopify-buttons.module';

@Component({
  selector: 'shopify-edit-product',
  templateUrl: './edit-product.component.html',
  standalone: true,
  imports: [ProductModule, ShopifyButtonsModule],
})
export class EditProductComponent {
  public formMode: ProductFormMode = ProductFormMode.EDIT;
}
