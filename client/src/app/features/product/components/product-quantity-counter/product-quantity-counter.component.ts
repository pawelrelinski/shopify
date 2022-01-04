import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shopify-product-quantity-counter',
  templateUrl: './product-quantity-counter.component.html',
  styleUrls: ['./product-quantity-counter.component.scss'],
})
export class ProductQuantityCounterComponent implements OnInit {
  @Output() onCounter: EventEmitter<number> = new EventEmitter<number>();

  public ngOnInit(): void {
    this.onCounter.emit(this.counter);
  }

  public counter = 1;

  public increment(): void {
    this.counter += 1;
    this.onCounter.emit(this.counter);
  }

  public decrement(): void {
    this.counter === 1 ? (this.counter = 1) : (this.counter -= 1);
    this.onCounter.emit(this.counter);
  }
}
