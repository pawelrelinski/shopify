import { ProductResponse } from '@features/product/models/product-response';

export type AttributesOfProduct = ProductResponse['attributes'] & {
  id: number;
};
