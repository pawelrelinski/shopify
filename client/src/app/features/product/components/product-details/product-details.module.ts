import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductDetailsViewsStatsComponent } from './product-details-views-stats/product-details-views-stats.component';

@NgModule({
  declarations: [ProductDetailsComponent, ProductDetailsViewsStatsComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
