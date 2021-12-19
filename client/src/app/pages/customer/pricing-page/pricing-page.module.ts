import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPageRoutingModule } from './pricing-page-routing.module';
import { PricingPageComponent } from './pricing-page.component';


@NgModule({
  declarations: [
    PricingPageComponent
  ],
  imports: [
    CommonModule,
    PricingPageRoutingModule
  ]
})
export class PricingPageModule { }
