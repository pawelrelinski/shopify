import { Component } from '@angular/core';
import { CheckoutModule } from '@features/checkout/checkout.module';

@Component({
  selector: 'shopify-checkout-page',
  templateUrl: './checkout-page.component.html',
  standalone: true,
  imports: [CheckoutModule],
})
export class CheckoutPageComponent {}
