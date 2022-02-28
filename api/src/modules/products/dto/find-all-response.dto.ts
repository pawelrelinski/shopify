import { Product } from '../entities/product.entity';

export interface FindAllResponseDto {
  productsCountInCategory: number;
  products: Product[];
}
