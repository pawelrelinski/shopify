import { FormControl } from '@angular/forms';

export interface ShippingAddressForm {
  address: FormControl<string>;
  city: FormControl<string>;
  postalCode: FormControl<string>;
  flatNumber: FormControl<string>;
}

export interface PaymentDetailsForm {
  cardNumber: FormControl<number>;
  expirationDate: FormControl<string | number>;
  cvv: FormControl<string | number | null>;
}

export interface ContactInformationForm {
  email: FormControl<string>;
  phoneNumber: FormControl<string | number>;
}

export interface DeliveryMethodForm {
  method: FormControl<any>;
}
