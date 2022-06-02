import { HttpStatus } from '@nestjs/common';
import { Product } from '@modules/products/entities/product.entity';

export interface CreateProductResponseDto {
  product: Product;
  status: HttpStatus;
  message: string;
}
