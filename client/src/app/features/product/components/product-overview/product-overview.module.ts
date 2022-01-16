import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopifyCounterModule } from '@shared/shopify-counter/shopify-counter.module';
import { ShopifyNotificationsModule } from '@shared/shopify-notifications/shopify-notifications.module';
import { DirectivesModule } from '@core/directives/directives.module';
import { ProductOverviewHeaderComponent } from './product-overview-header/product-overview-header.component';
import { ProductOverviewFeaturesComponent } from './product-overview-features/product-overview-features.component';
import { ProductOverviewSpecificationComponent } from './product-overview-specification/product-overview-specification.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductOverviewFullDescriptionComponent } from './product-overview-full-description/product-overview-full-description.component';

@NgModule({
  declarations: [
    ProductOverviewComponent,
    ProductOverviewHeaderComponent,
    ProductOverviewFeaturesComponent,
    ProductOverviewSpecificationComponent,
    ProductOverviewFullDescriptionComponent,
  ],
  imports: [CommonModule, ShopifyCounterModule, ShopifyNotificationsModule, DirectivesModule],
  exports: [ProductOverviewComponent],
})
export class ProductOverviewModule {}
