export interface Product {
  id: number;
  name: string;
  description: string;
  defaultPrice: number;
  promotionPrice: number;
  isAvailable: boolean;
  category: string;
  quantity: number;
  producer: string;
  createdAt: string;
  refNumber: string;
  dataSheet: object;
  views: number;
  isPublished: boolean;
}
