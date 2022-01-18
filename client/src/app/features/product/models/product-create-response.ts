import { Product } from '@features/product/models/product';

export interface ProductCreateResponse {
  product: Product;
  status: number;
  message: string;
}
