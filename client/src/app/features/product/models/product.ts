export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  defaultPrice: number;
  promotionPrice: number;
  isAvailable: boolean;
  category: string;
  quantity: number;
  producer: string;
  createdAt: string;
  refNumber: string;
  dataSheet: Array<{ key: string; value: string }>;
  views: number;
  isPublished: boolean;
}
