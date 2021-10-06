import {OrderProduct, OrderStatus, Payment} from '@features/order/models';

export interface Order {
  id: number | string | null;
  date: Date | number;
  customer: Object;
  status: OrderStatus;
  payment: Payment;
  shippingMethod: string;
  products: Array<OrderProduct>;
  summaryPrice: number;
}
