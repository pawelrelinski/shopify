import { Component, Input, OnInit } from '@angular/core';
import {
  ShoppingCartSubtotalPriceService,
  ShoppingCartVisibilityService,
} from '@features/shopping-cart/services';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  backgroundOverlay,
  slideOver,
} from '@features/shopping-cart/components/shopping-cart/animations';

@Component({
  selector: 'shopify-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  animations: [slideOver, backgroundOverlay],
})
export class ShoppingCartComponent implements OnInit {
  @Input() isOpen!: boolean;
  public subtotalPrice!: number | string;

  constructor(
    private shoppingCartVisibility: ShoppingCartVisibilityService,
    private shoppingCartSubtotalPriceService: ShoppingCartSubtotalPriceService
  ) {}

  public ngOnInit(): void {
    this.shoppingCartSubtotalPriceService.get().subscribe((data: number) => {
      this.subtotalPrice = data.toFixed(2);
    });
  }

  public updateSubtotalPage(price: number): void {
    this.subtotalPrice = price;
  }

  public close(): void {
    this.shoppingCartVisibility.changeShoppingCartVisibility(false);
  }
}
