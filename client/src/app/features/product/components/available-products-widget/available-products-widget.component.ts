import {Component, OnInit} from '@angular/core';

import {ProductService} from '@features/product/services';

@Component({
  selector: 'shopify-available-products-widget',
  templateUrl: './available-products-widget.component.html',
  styleUrls: ['./available-products-widget.component.scss']
})
export class AvailableProductsWidgetComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
