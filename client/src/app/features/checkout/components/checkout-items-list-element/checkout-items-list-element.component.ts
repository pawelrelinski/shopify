import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartItem } from '@features/shopping-cart/models';

@Component({
  selector: 'shopify-checkout-items-list-element',
  templateUrl: './checkout-items-list-element.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class CheckoutItemsListElementComponent implements OnInit {
  @Input() item!: ShoppingCartItem;

  ngOnInit(): void {
    console.log(this.item);
  }
}
