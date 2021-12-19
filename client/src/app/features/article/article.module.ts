import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from '@features/article/components';
import { ArticlesListElementComponent } from '@features/article/components';

@NgModule({
	declarations: [ArticlesListComponent, ArticlesListElementComponent],
	imports: [CommonModule],
	exports: [ArticlesListComponent],
})
export class ArticleModule {}
