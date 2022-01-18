export interface UpdateProductDto {
  name: string;
  description: string;
  defaultPrice: number;
  promotionPrice: number;
  isAvailable: boolean;
  category: string;
  quantity: number;
  producer: string;
  refNumber: string;
  dataSheet: string;
  isPublished: boolean;
}
