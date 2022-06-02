import { Component, Input } from '@angular/core';
import { ShoppingCartItem } from '@features/shopping-cart/models';

@Component({
  selector: 'shopify-checkout-items-list',
  templateUrl: './checkout-items-list.component.html',
})
export class CheckoutItemsListComponent {
  @Input() items!: ShoppingCartItem[] | null;

  public fullSummaryIsOpen = false;

  public toggleFullSummary(): void {
    this.fullSummaryIsOpen = !this.fullSummaryIsOpen;
  }
}
