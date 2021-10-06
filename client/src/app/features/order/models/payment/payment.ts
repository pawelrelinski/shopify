import {PaymentType} from '@features/order/models';

export abstract class Payment {
  private id!: number;
  private type!: PaymentType;
  private amount!: number;
  private currency!: string;

  public getId(): number {
    return this.id;
  }

  public setId(value: number): void {
    this.id = value;
  }

  public getType(): number {
    return this.type;
  }

  public setType(value: PaymentType): void {
    this.id = value;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(value: number): void {
    this.amount = value;
  }

  public getCurrency(): string {
    return this.currency;
  }

  public setCurrency(value: string): void {
    this.currency = value;
  }
}
