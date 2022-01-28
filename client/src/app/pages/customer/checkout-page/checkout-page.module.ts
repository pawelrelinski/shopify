import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutPageRoutingModule } from './checkout-page-routing.module';
import { CheckoutPageComponent } from './checkout-page.component';
import { CheckoutModule } from '@features/checkout/checkout.module';

@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [CommonModule, CheckoutPageRoutingModule, CheckoutModule],
})
export class CheckoutPageModule {}
