import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Checkout, DeliveryMethod } from '@features/checkout/models';
import {
  ContactInformationForm,
  DeliveryMethodForm,
  PaymentDetailsForm,
  ShippingAddressForm,
} from '@features/checkout/components/checkout-form/checkout-form';

@Component({
  selector: 'shopify-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutFormComponent implements OnInit {
  @Output() onCheckoutData = new EventEmitter<Checkout>();

  public shippingAddressGroup!: FormGroup<ShippingAddressForm>;
  public paymentDetailsGroup!: FormGroup<PaymentDetailsForm>;
  public contactInformationGroup!: FormGroup<ContactInformationForm>;
  public deliveryMethodGroup!: FormGroup<DeliveryMethodForm>;

  public checkoutData!: Checkout;
  public deliveryMethods: DeliveryMethod[] = [
    { name: 'Standard', deliveryTime: '4-10', price: 5.0 },
    { name: 'Express', deliveryTime: '2-5', price: 16.0 },
  ];

  constructor(private fb: UntypedFormBuilder) {}

  public ngOnInit(): void {
    this.setShippingAddressGroup();
    this.setPaymentDetailsGroup();
    this.setContactInformationGroup();
    this.setDeliveryMethodForm();
  }

  public confirmCheckoutData(): void {
    this.setCheckoutData();
    this.onCheckoutData.emit(this.checkoutData);
  }

  public setCheckoutData(): void {
    this.checkoutData = this.getCheckoutData();
  }

  public setDeliveryMethodValue(value: any): void {
    this.deliveryMethodGroup.get('method')?.setValue(value);
    this.deliveryMethodGroup.patchValue({
      method: value,
    });
    console.log(this.deliveryMethodGroup.get('method')?.value);
  }

  private setShippingAddressGroup(): void {
    const postalCodePattern = '\\d{2}-\\d{3}';

    this.shippingAddressGroup = this.fb.group({
      address: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      city: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      postalCode: this.fb.control('', [Validators.required, Validators.pattern(postalCodePattern)]),
      flatNumber: this.fb.control('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25),
      ]),
    });
  }

  private setPaymentDetailsGroup(): void {
    const expirationDatePattern = '^([0-9]{1}[0-2]{1})\\/?([0-9]{2})$';
    const cvvPattern = '^[0-9]{3,4}$';

    this.paymentDetailsGroup = this.fb.group({
      cardNumber: this.fb.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ]),
      expirationDate: this.fb.control('', [
        Validators.required,
        Validators.pattern(expirationDatePattern),
      ]),
      cvv: this.fb.control(null, [Validators.required, Validators.pattern(cvvPattern)]),
    });
  }

  private setContactInformationGroup(): void {
    const phoneNumberPattern = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$';

    this.contactInformationGroup = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', [
        Validators.required,
        Validators.pattern(phoneNumberPattern),
      ]),
    });
  }

  private setDeliveryMethodForm(): void {
    this.deliveryMethodGroup = this.fb.group({
      method: this.fb.control({}, [Validators.required]),
    });
  }

  private getCheckoutData(): Checkout {
    return {
      shippingAddress: {
        address: this.shippingAddressGroup.get('address')?.value as string,
        city: this.shippingAddressGroup.get('city')?.value as string,
        postalCode: this.shippingAddressGroup.get('postalCode')?.value as string,
        flatNumber: this.shippingAddressGroup.get('flatNumber')?.value as string,
      },
      paymentDetails: {
        cardNumber: this.paymentDetailsGroup.get('cardNumber')?.value as number,
        expirationDate: this.paymentDetailsGroup.get('expirationDate')?.value as string,
        cvv: this.paymentDetailsGroup.get('cvv')?.value as number,
      },
      contactInformation: {
        email: this.contactInformationGroup.get('email')?.value as string,
        phoneNumber: this.contactInformationGroup.get('phoneNumber')?.value as string,
      },
      deliveryMethod: {
        method: this.deliveryMethodGroup.get('method')?.value,
      },
    };
  }
}
