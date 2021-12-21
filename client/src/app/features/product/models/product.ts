type Price = string | number;

export interface Product {
  name: string;
  description: string;
  defaultPrice: Price;
  promoPrice: Price;
  isAvailable: boolean;
  amount: number;
  category: string;
  producer: {
    id: number | string;
    name: string;
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
  reviews: {
    user: {
      id: string | number;
      name: string;
    };
    cratedAt:
      | Date
      | {
          date: string;
          timezone_type: number;
          timezone: string;
        };
    content: string;
    rating: number;
  }[];
}
