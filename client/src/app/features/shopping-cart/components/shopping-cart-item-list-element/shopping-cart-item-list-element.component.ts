import { Component, Input } from '@angular/core';
import { ShoppingCartItem } from '@features/shopping-cart/models';

@Component({
  selector: 'shopify-shopping-cart-item-list-element',
  templateUrl: './shopping-cart-item-list-element.component.html',
  styleUrls: ['./shopping-cart-item-list-element.component.scss'],
})
export class ShoppingCartItemListElementComponent {
  @Input() item!: ShoppingCartItem;
}
