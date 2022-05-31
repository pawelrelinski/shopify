import { Component } from '@angular/core';
import { ArticleModule } from '@features/article/article.module';

@Component({
  selector: 'shopify-articles-page',
  templateUrl: './articles-page.component.html',
  standalone: true,
  imports: [ArticleModule],
})
export class ArticlesPageComponent {}
