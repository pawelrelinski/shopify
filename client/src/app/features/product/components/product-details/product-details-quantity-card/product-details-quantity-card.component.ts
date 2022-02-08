import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopify-product-details-quantity-card[quantity]',
  templateUrl: './product-details-quantity-card.component.html',
  styleUrls: ['./product-details-quantity-card.component.scss'],
})
export class ProductDetailsQuantityCardComponent {
  @Input() quantity!: number;
}
