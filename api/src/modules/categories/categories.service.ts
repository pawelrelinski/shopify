import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { getRepository, Repository } from 'typeorm';
import { CategoryView } from './entities/category-view.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(CategoryView)
    private readonly categoryViewRepository: Repository<CategoryView>,
  ) {}

  public async findAll(query?: any): Promise<Category[]> {
    const qb = getRepository(Category).createQueryBuilder('category');

    if ('formatName' in query) {
      qb.where('category.formatName = :fName', { fName: query.formatName });
    }

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    return qb.getMany();
  }

  public async findAllWithViewsCount(query?: any) {
    const qb = getRepository(Category)
      .createQueryBuilder('category')
      .innerJoinAndSelect('category.views', 'category_views')
      .select('category.*')
      .addSelect('COUNT(category_views.id)', 'viewsCount')
      .groupBy('category.id')
      .orderBy('viewsCount', 'DESC');

    return qb.getRawMany();
  }

  public async findAllWithProductsCount(): Promise<any> {
    const qb = getRepository(Category)
      .createQueryBuilder('category')
      .innerJoinAndSelect('category.products', 'product')
      .select('category.*')
      .addSelect('COUNT(product.id) as productsCount')
      .where('product.isDeleted = 0')
      .groupBy('category.id');

    return await qb.getRawMany();
  }

  public async findByFormatName(formatName: string): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { formatName },
    });
  }

  public async findById(id: number): Promise<Category | null> {
    const category: Category = await this.categoryRepository.findOne(id);
    if (!category) {
      return null;
    }
    const view = new CategoryView();
    view.category = category;
    await this.categoryViewRepository.save(view);
    return category;
  }

  public async count(): Promise<number> {
    return this.categoryRepository.count();
  }
}
