import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { ProductService } from '@features/product/services';

@Component({
  selector: 'shopify-product-available-widget',
  templateUrl: './product-available-widget.component.html',
  styleUrls: ['./product-available-widget.component.scss'],
})
export class ProductAvailableWidgetComponent implements OnInit {
  public count!: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.setProductsCount();
  }

  private setProductsCount(): void {
    const options = new Map<string, string>();

    this.productService
      .getMetadata(options)
      .pipe(take(1))
      .subscribe((data) => {
        this.count = data.count;
      });
  }
}
