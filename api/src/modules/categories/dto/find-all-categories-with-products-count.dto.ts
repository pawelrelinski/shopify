import { Category } from '../category.entity';

export interface FindAllCategoriesWithProductsCountDto extends Category {
  productsCount: number;
}
