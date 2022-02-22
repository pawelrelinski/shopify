import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryView } from './category-view.entity';
import { CategoryViewService } from './category-view.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  providers: [CategoriesService, CategoryViewService],
  controllers: [CategoriesController],
  exports: [CategoriesService, CategoryViewService],
})
export class CategoriesModule {}
