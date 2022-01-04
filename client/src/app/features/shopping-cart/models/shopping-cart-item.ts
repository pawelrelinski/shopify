export interface ShoppingCartItem {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  refNumber?: string;
}
