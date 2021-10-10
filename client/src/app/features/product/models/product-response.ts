export interface ProductResponse {
  type: string;
  id: number | string;
  attributes: {
    name: string;
    description: string;
    amount: number;
    price: number;
    createdAt: string | Date;
    category: string;
    color: string;
    material: string;
  };
}
