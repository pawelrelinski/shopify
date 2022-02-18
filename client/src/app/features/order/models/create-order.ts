import { OrderProduct } from '@features/order/models/order-product';
import { User } from '@features/user/models';
import { Payment } from '@features/order/models/payment/payment';

export interface CreateOrder {
  shippingMethod: string;
  products: OrderProduct[];
  comments?: string;
  user: User;
  payment: Payment;
  summaryPrice: number;
}
