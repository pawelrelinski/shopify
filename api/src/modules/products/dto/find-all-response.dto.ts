import { Product } from '../enities/product.entity';

export interface FindAllResponseDto {
  productsCountInCategory: number;
  products: Product[];
}