import { Component, Input } from '@angular/core';

@Component({
  selector: 'shopify-product-details-views-stats[viewsData]',
  templateUrl: './product-details-views-stats.component.html',
  styleUrls: ['./product-details-views-stats.component.scss'],
})
export class ProductDetailsViewsStatsComponent {
  @Input() viewsData!: { name: string; value: number }[];
}
