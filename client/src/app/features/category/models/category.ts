import { SafeHtml } from '@angular/platform-browser';

export interface Category {
  id: number;
  name: string;
  formatName: string;
  description: string | null;
  heroIconAsSvg: string | SafeHtml;
  createdAt: string;
}
