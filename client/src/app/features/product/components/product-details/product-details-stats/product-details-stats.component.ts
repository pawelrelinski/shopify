import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopify-product-details-stats',
  templateUrl: './product-details-stats.component.html',
  styleUrls: ['./product-details-stats.component.scss'],
})
export class ProductDetailsStatsComponent {
  @Input() productQuantity!: number;
  @Input() productViews!: number;
}
