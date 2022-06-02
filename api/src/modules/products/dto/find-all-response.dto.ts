import { Product } from '@modules/products/entities/product.entity';

export interface FindAllResponseDto {
  productsCountInCategory: number;
  products: Product[];
}
