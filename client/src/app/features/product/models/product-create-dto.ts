export interface ProductCreateDto {
  name: string;
  shortDescription: string;
  description: string;
  defaultPrice: number;
  promotionPrice: number;
  category: string;
  quantity: number;
  producer: string;
  expectedDeliveryTime: number;
  refNumber: string;
  dataSheet: string;
  shippingMethods: string;
  image: any;
}
