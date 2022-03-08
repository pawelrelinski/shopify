import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { ProductService } from '@features/product/services';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'shopify-product-available-widget',
  templateUrl: './product-available-widget.component.html',
  styleUrls: ['./product-available-widget.component.scss'],
})
export class ProductAvailableWidgetComponent implements OnInit {
  public count$!: Observable<number>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.setProductsCount();
  }

  private setProductsCount(): void {
    const options = new Map<string, string>();

    this.count$ = this.productService.getCount(options).pipe(
      take(1),
      map((data: any) => data.count)
    );
  }
}
