import {Component} from '@angular/core';

import {ProductFormMode} from '@features/product/models';

@Component({
  selector: 'shopify-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public formMode: ProductFormMode = ProductFormMode.CREATE;
}
