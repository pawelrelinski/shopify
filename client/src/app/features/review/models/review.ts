import { Customer } from '@features/customer/models';

export interface Review {
  customer: Customer;
  cratedAt:
    | Date
    | {
        date: string;
        timezone_type: number;
        timezone: string;
      };
  content: string;
  rating: number;
}
