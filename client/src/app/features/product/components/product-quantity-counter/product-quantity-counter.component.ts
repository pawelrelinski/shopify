import { Component } from '@angular/core';

@Component({
  selector: 'shopify-product-quantity-counter',
  templateUrl: './product-quantity-counter.component.html',
  styleUrls: ['./product-quantity-counter.component.scss'],
})
export class ProductQuantityCounterComponent {
  public counter = 1;

  public increment(): void {
    this.counter += 1;
  }

  public decrement(): void {
    this.counter === 1 ? (this.counter = 1) : (this.counter -= 1);
  }
}
