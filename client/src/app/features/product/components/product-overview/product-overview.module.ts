import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopifyCounterModule } from '@shared/shopify-counter/shopify-counter.module';
import { ProductOverviewHeaderComponent } from './product-overview-header/product-overview-header.component';
import { ProductOverviewFeaturesComponent } from './product-overview-features/product-overview-features.component';
import { ProductOverviewSpecificationComponent } from './product-overview-specification/product-overview-specification.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

@NgModule({
  declarations: [
    ProductOverviewComponent,
    ProductOverviewHeaderComponent,
    ProductOverviewFeaturesComponent,
    ProductOverviewSpecificationComponent,
  ],
  imports: [CommonModule, ShopifyCounterModule],
  exports: [ProductOverviewComponent],
})
export class ProductOverviewModule {}
