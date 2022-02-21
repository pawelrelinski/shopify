import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductDetailsViewsChartComponent } from './product-details-views-chart/product-details-views-chart.component';
import { ProductDetailsStatsComponent } from './product-details-stats/product-details-stats.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductDetailsViewsChartComponent,
    ProductDetailsStatsComponent,
  ],
  imports: [CommonModule, NgxChartsModule, MatProgressSpinnerModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
