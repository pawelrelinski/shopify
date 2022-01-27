import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopifyCounterModule } from '@shared/shopify-counter/shopify-counter.module';
import { DirectivesModule } from '@core/directives/directives.module';
import { ProductOverviewHeaderComponent } from './product-overview-header/product-overview-header.component';
import { ProductOverviewFeaturesComponent } from './product-overview-features/product-overview-features.component';
import { ProductOverviewSpecificationComponent } from './product-overview-specification/product-overview-specification.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductOverviewFullDescriptionComponent } from './product-overview-full-description/product-overview-full-description.component';
import { ProductOverviewMapComponent } from './product-overview-map/product-overview-map.component';

@NgModule({
  declarations: [
    ProductOverviewComponent,
    ProductOverviewHeaderComponent,
    ProductOverviewFeaturesComponent,
    ProductOverviewSpecificationComponent,
    ProductOverviewFullDescriptionComponent,
    ProductOverviewMapComponent,
  ],
  imports: [CommonModule, ShopifyCounterModule, DirectivesModule],
  exports: [ProductOverviewComponent],
})
export class ProductOverviewModule {}
