import { Component } from '@angular/core';
import { ShoppingCartVisibilityService } from '@features/shopping-cart/services';
import { ShoppingCartVisiblity } from '@features/shopping-cart/models';

@Component({
  selector: 'shopify-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  constructor(private shoppingCartVisibility: ShoppingCartVisibilityService) {}

  public close(): void {
    this.shoppingCartVisibility.changeShoppingCartVisibility(false);
  }
}
