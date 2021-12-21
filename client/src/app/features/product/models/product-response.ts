import { Product } from '@features/product/models/product';

export interface ProductResponse {
  type: string;
  id: number | string;
  attributes: Product;
}
