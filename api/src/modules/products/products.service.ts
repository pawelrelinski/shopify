import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import {
  Brackets,
  DeepPartial,
  FindOneOptions,
  getRepository,
  Repository,
} from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../categories/entities/category.entity';
import { CategoriesService } from '../categories/categories.service';
import { ProductView } from './entities/product-view.entity';
import { HOST_ADDRESS } from '../../config/configuration';
import { CategoryViewService } from '../categories/category-view.service';

@Injectable()
export class ProductsService {
  private uploadsUrl: string = `http://${HOST_ADDRESS}:${process.env.SERVER_PORT}/uploads/`;

  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    @InjectRepository(ProductView)
    private readonly viewsRepository: Repository<ProductView>,
    private readonly categoriesService: CategoriesService,
    private readonly categoryViewService: CategoryViewService,
  ) {}

  public async findAll(query): Promise<Product[]> {
    const qb = await getRepository(Product)
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .where('product.isDeleted=0');

    if ('category' in query) {
      const category: Category = await this.categoriesService.findByFormatName(
        query.category,
      );
      qb.andWhere(
        new Brackets((qb) => {
          qb.where('product.category = :id', { id: category.id });
        }),
      );
      await this.categoryViewService.addToCategory(category);
    }

    if ('sortBy' in query) {
      const order: 'ASC' | 'DESC' =
        'sortMethod' in query ? query.sortMethod.toUpperCase() : 'DESC';
      qb.orderBy(`product.${query.sortBy}`, order);
    }

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      const offset: number =
        'limit' in query ? query.limit * query.offset : query.offset;
      qb.offset(offset);
    }

    const products = await qb.getMany();
    products.forEach((product: Product) => {
      product.image = `${this.uploadsUrl}${product.image}`;
    });

    return products;
  }

  public async findMostPopularFromLastDays(query?: any): Promise<any> {
    const qb = await getRepository(Product)
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.views', 'product_views')
      .select('product.id', 'productId')
      .addSelect('product.name', 'productName')
      .addSelect('product.image', 'productImage')
      .addSelect('product.categoryId')
      .addSelect('SUM(product_views.value)', 'productViews')
      .where(
        'product_views.createdAt > DATE_SUB(CURRENT_TIMESTAMP, INTERVAL 7 DAY)',
      )
      .andWhere('product.isDeleted = 0');

    if ('category' in query) {
      const category: Category = await this.categoriesService.findByFormatName(
        query.category,
      );
      qb.andWhere(
        new Brackets((qb) => {
          qb.where('product.category = :id', { id: category.id });
        }),
      );
    }

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      const offset: number =
        'limit' in query ? query.limit * query.offset : query.offset;
      qb.offset(offset);
    }

    qb.groupBy('product.id');

    let order: 'ASC' | 'DESC' = 'DESC';
    if ('order' in query) {
      order = query.order.toUpperCase();
      qb.orderBy('productViews', order);
    }
    qb.orderBy('productViews', order);
    return await qb.getRawMany();
  }

  public async findOne(id: string): Promise<Product | null> {
    const options: FindOneOptions<Product> = {
      where: { id, isDeleted: false },
      relations: ['category', 'views'],
    };
    const product = await this.productsRepository.findOne(options);
    if (!product) {
      return null;
    }
    const category = await this.categoriesService.findById(product.category.id);
    await this.categoryViewService.addToCategory(category);

    const view = new ProductView();
    view.product = product;
    await this.viewsRepository.save(view);

    return this.productsRepository.findOne(options);
  }

  public async count(category?: string): Promise<number> {
    const wereOptions = { isDeleted: false };
    if (category) {
      const categoryEntity: Category =
        await this.categoriesService.findByFormatName(category);
      Object.assign(wereOptions, {
        category: categoryEntity,
      });
    }
    return this.productsRepository.count(wereOptions);
  }

  public async create(product: CreateProductDto): Promise<Product> {
    const category: Category = await this.categoriesService.findByFormatName(
      product.category as string,
    );
    product.category = category.id;
    return this.productsRepository.save(product as DeepPartial<Product>);
  }

  public async delete(id: string): Promise<Product> {
    const product: Product = await this.findOne(id);
    product.isDeleted = true;
    return this.productsRepository.save(product);
  }
}
