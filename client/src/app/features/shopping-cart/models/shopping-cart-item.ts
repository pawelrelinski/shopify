import { Category } from '@features/category/models';

export interface ShoppingCartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  category: Category;
  image: string;
  refNumber?: string;
}
