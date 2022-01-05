import { AttributesOfProduct, ProductResponse } from '@features/product/models';

export class ProductResponseConverter {
  public static toAttributesOfProduct(product: ProductResponse): AttributesOfProduct {
    return { id: product.id, ...product.attributes } as AttributesOfProduct;
  }
}
