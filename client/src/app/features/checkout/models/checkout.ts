import { ShippingAddress } from '@features/checkout/models/shipping-address';
import { PaymentDetails } from '@features/checkout/models/payment-details';
import { ContactInformation } from '@features/checkout/models/contact-information';

export interface Checkout {
  shippingAddress: ShippingAddress;
  paymentDetails: PaymentDetails;
  contactInformation: ContactInformation;
}
