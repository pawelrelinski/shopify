import { Producer } from '@features/producer/models';
import { Review } from '@features/review/models';

type Price = string | number;

export interface Product {
  name: string;
  description: string;
  defaultPrice: Price;
  promoPrice: Price;
  isAvailable: boolean;
  amount: number;
  category: string;
  producer: Producer;
  createdAt:
    | Date
    | {
        date: string | Date;
        timezone_type: number;
        timezone: string;
      };
  refNumber: string;
  images: {
    src: string;
    alt: string;
  }[];
  dataSheet: {
    name: string;
    value: string;
  }[];
  reviews: Review[];
}
