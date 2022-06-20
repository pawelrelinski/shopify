export interface Checkout {
  shippingAddress: ShippingAddress;
  paymentDetails: PaymentDetails;
  contactInformation: ContactInformation;
  deliveryMethod: Object;
}

interface ShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  flatNumber: string;
}

interface PaymentDetails {
  cardNumber: number;
  expirationDate: string;
  cvv: number;
}

interface ContactInformation {
  email: string;
  phoneNumber: string;
}
