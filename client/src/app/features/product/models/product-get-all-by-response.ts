import { Product } from '@features/product/models/product';

export interface ProductGetAllByResponse {
  products: Array<Product>;
}
