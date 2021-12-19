import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesPageRoutingModule } from './articles-page-routing.module';
import { ArticlesPageComponent } from './articles-page.component';
import { ArticleModule } from '@features/article/article.module';

@NgModule({
	declarations: [ArticlesPageComponent],
	imports: [CommonModule, ArticlesPageRoutingModule, ArticleModule],
})
export class ArticlesPageModule {}
