import { Product } from '../product.entity';
import { HttpStatus } from '@nestjs/common';

export class CreateProductResponseDto {
  public product: Product;
  public status: HttpStatus;
  public title: string;
}
