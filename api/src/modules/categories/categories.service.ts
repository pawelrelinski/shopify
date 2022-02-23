import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { getRepository, Repository } from 'typeorm';
import { FindAllCategoriesWithProductsCountDto } from './dto/find-all-categories-with-products-count.dto';
import { CategoryView } from './category-view.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(CategoryView)
    private readonly categoryViewRepository: Repository<CategoryView>,
  ) {}

  public async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
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

  public async findAllWithProductsCount(): Promise<FindAllCategoriesWithProductsCountDto> {
    return await getRepository<Category>(Category).query(
      `SELECT COUNT(p.id) as productsCount, c.*
              FROM category c
              INNER JOIN product p
              ON p.categoryId = c.id
              WHERE p.isDeleted = 0
              GROUP BY c.id;
              `,
    );
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