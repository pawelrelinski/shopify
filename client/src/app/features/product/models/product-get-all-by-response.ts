import { Product } from '@features/product/models/product';

export interface ProductGetAllByResponse {
  products: Product[];
  productsCountInCategory: number;
}
