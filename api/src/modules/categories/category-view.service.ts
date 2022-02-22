import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryView } from './category-view.entity';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

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
