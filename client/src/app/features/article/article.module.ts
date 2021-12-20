import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from '@features/article/components';
import { ArticleListElementComponent } from '@features/article/components';

@NgModule({
  declarations: [ArticleListComponent, ArticleListElementComponent],
  imports: [CommonModule],
  exports: [ArticleListComponent],
})
export class ArticleModule {}
