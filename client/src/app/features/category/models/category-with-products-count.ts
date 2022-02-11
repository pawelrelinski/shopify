import { Category } from '@features/category/models/category';

export interface CategoryWithProductsCount extends Category {
  productsCount: number;
}
