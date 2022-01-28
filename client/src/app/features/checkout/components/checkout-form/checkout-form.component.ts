import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Checkout } from '@features/checkout/models';

@Component({
  selector: 'shopify-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutFormComponent implements OnInit {
  public shippingAddressGroup!: FormGroup;
  public paymentDetailsGroup!: FormGroup;
  public contactInformationGroup!: FormGroup;

  public checkoutData!: Checkout;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.setShippingAddressGroup();
    this.setPaymentDetailsGroup();
    this.setContactInformationGroup();
  }

  public setCheckoutData(): void {
    this.checkoutData = this.getCheckoutData();
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

  private getCheckoutData(): Checkout {
    return {
      shippingAddress: {
        address: this.shippingAddressGroup.get('address')?.value,
        city: this.shippingAddressGroup.get('city')?.value,
        postalCode: this.shippingAddressGroup.get('postalCode')?.value,
        flatNumber: this.shippingAddressGroup.get('flatNumber')?.value,
      },
      paymentDetails: {
        cardNumber: this.paymentDetailsGroup.get('cardNumber')?.value,
        expirationDate: this.paymentDetailsGroup.get('expirationDate')?.value,
        cvv: this.paymentDetailsGroup.get('cvv')?.value,
      },
      contactInformation: {
        email: this.contactInformationGroup.get('email')?.value,
        phoneNumber: this.contactInformationGroup.get('phoneNumber')?.value,
      },
    };
  }
}
