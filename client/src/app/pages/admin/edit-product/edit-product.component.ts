import {Component} from '@angular/core';

import {ProductFormMode} from '@features/product/models';

@Component({
  selector: 'shopify-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  public formMode: ProductFormMode = ProductFormMode.EDIT;
}
