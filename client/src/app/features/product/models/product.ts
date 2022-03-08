import { Category } from '@features/category/models';
import { SafeHtml } from '@angular/platform-browser';
import { View } from '@features/product/models/view';

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
  dataSheet: { key: string; value: string }[];
  attributes?: { id: number; name: string; value: string }[];
  views: View[];
  isPublished: boolean;
  image: string;
}
