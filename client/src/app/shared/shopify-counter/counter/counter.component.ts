import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shopify-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
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
