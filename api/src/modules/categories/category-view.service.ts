import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryView } from '@modules/categories/entities/category-view.entity';
import { Category } from '@modules/categories/entities/category.entity';

@Injectable()
export class CategoryViewService {
  constructor(
    @InjectRepository(CategoryView)
    private readonly categoryViewRepository: Repository<CategoryView>,
  ) {}

  public async addToCategory(category: Category): Promise<CategoryView> {
    const categoryView = new CategoryView();
    categoryView.category = category;
    return await this.categoryViewRepository.save(categoryView);
  }
}
