import {Component} from '@angular/core';

@Component({
  selector: 'shopify-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent {
  public path: Array<string> = ['Men', 'Shirts', 'Black t-shirt'];
}
