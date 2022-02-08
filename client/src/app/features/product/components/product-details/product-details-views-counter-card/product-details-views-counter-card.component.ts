import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopify-product-details-views-counter-card[viewsCount]',
  templateUrl: './product-details-views-counter-card.component.html',
  styles: [
    `
      .w-fit {
        width: fit-content;
      }
    `,
  ],
})
export class ProductDetailsViewsCounterCardComponent {
  @Input() viewsCount!: number;
}
