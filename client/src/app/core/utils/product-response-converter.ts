import { AttributesOfProduct } from '@features/product/components';
import { ProductResponse } from '@features/product/models';

export class ProductResponseConverter {
  public static toAttributesOfProduct(product: ProductResponse): AttributesOfProduct {
    return { id: product.id, ...product.attributes } as AttributesOfProduct;
  }
}
