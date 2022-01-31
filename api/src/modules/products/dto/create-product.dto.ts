export interface CreateProductDto {
  name: string;
  description: string;
  defaultPrice: number;
  promotionPrice?: number;
  category: any;
  quantity: number;
  producer: string;
  expectedDeliveryTime: number;
  refNumber: string;
  dataSheet: string;
  isPublished: boolean;
  image: any;
}
