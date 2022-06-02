import { Category } from '@modules/categories/entities/category.entity';

export interface FindAllCategoriesWithProductsCountDto extends Category {
  productsCount: number;
}
