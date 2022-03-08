import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@features/product/models';

@Component({
  selector: 'shopify-product-overview-specification[attributes]',
  templateUrl: './product-overview-specification.component.html',
})
export class ProductOverviewSpecificationComponent implements OnInit {
  @Input() attributes!: Product['attributes'];

  ngOnInit() {
    console.log(this.attributes);
  }
}
