import { Category } from '@features/category/models';
import { SafeHtml } from '@angular/platform-browser';

export interface Product {
  id: number;
  name: string;
  shortDescription: string | SafeHtml;
  description: string | SafeHtml;
  defaultPrice: number;
  promotionPrice: number;
  isAvailable: boolean;
  category: Category;
  quantity: number;
  producer: string;
  createdAt: string;
  refNumber: string;
  dataSheet: Array<{ key: string; value: string }>;
  views: number;
  isPublished: boolean;
}
