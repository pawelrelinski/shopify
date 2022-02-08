import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductDetailsViewsStatsComponent } from './product-details-views-stats/product-details-views-stats.component';
import { ProductDetailsViewsCounterCardComponent } from './product-details-views-counter-card/product-details-views-counter-card.component';
import { ProductDetailsQuantityCardComponent } from './product-details-quantity-card/product-details-quantity-card.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsViewsStatsComponent,
    ProductDetailsViewsCounterCardComponent,
    ProductDetailsQuantityCardComponent,
  ],
  imports: [CommonModule, NgxChartsModule, MatProgressSpinnerModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
