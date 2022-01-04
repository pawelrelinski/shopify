import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCartItem } from '@features/shopping-cart/models';

@Component({
  selector: 'shopify-shopping-cart-item-list-element',
  templateUrl: './shopping-cart-item-list-element.component.html',
  styleUrls: ['./shopping-cart-item-list-element.component.scss'],
})
export class ShoppingCartItemListElementComponent {
  @Input() item!: ShoppingCartItem;
  @Output() onDelete: EventEmitter<ShoppingCartItem['id']> = new EventEmitter<
    ShoppingCartItem['id']
  >();

  public emitDelete(id: ShoppingCartItem['id']): void {
    this.onDelete.emit(id);
  }
}
