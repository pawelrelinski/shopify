import {Component} from '@angular/core';
import {ProductFormMode} from "@features/product/models";

@Component({
  selector: 'shopify-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public formMode: ProductFormMode = ProductFormMode.EDIT;
}
