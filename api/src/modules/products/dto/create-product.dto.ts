export class CreateProductDto {
  public name: string;
  public description: string;
  public defaultPrice: number;
  public promotionPrice?: number;
  public category: string;
  public quantity: number;
  public producer: string;
  public expectedDeliveryTime: number;
  public refNumber: string;
  public dataSheet: string;
  public isPublished: boolean;
}
