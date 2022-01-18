import { Product } from '../product.entity';
import { HttpStatus } from '@nestjs/common';

export interface CreateProductResponseDto {
  product: Product;
  status: HttpStatus;
  message: string;
}
