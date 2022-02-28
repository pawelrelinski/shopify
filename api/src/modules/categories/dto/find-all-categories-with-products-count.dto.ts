import { Category } from '../entities/category.entity';

export interface FindAllCategoriesWithProductsCountDto extends Category {
  productsCount: number;
}
