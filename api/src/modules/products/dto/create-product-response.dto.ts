import { Product } from '../enities/product.entity';
import { HttpStatus } from '@nestjs/common';

export interface CreateProductResponseDto {
  product: Product;
  status: HttpStatus;
  message: string;
}
