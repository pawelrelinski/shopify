import { Component, Input } from '@angular/core';
import { Product } from '@features/product/models';

@Component({
  selector: 'shopify-product-list-element[product]',
  templateUrl: './product-list-element.component.html',
  styleUrls: ['product-list-element.component.scss'],
})
export class ProductListElementComponent {
  @Input() product!: Product;
  public isLoading = true;
  public isError = false;

  public onLoadImageEventHandler(): void {
    this.isLoading = false;
  }

  public onErrorEventHandler(): void {
    this.isError = true;
  }
}
