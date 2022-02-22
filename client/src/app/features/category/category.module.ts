import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  CategoryCountWidgetComponent,
  CategoryHeaderWithTabsComponent,
  CategoryTableModule,
} from '@features/category/components';
import { RouterModule } from '@angular/router';
import { CategoryViewsChartComponent } from './components/category-views-chart/category-views-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    CategoryCountWidgetComponent,
    CategoryViewsChartComponent,
    CategoryHeaderWithTabsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CategoryTableModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
  ],
  exports: [
    CategoryCountWidgetComponent,
    CategoryTableModule,
    CategoryHeaderWithTabsComponent,
    CategoryViewsChartComponent,
  ],
})
export class CategoryModule {}
