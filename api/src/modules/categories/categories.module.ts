import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from '@modules/categories/categories.service';
import { CategoriesController } from '@modules/categories/categories.controller';
import { CategoryViewService } from '@modules/categories/category-view.service';
import { Category } from '@modules/categories/entities/category.entity';
import { CategoryView } from '@modules/categories/entities/category-view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  providers: [CategoriesService, CategoryViewService],
  controllers: [CategoriesController],
  exports: [CategoriesService, CategoryViewService],
})
export class CategoriesModule {}
