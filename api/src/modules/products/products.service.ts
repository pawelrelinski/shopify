import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './enities/product.entity';
import {
  Brackets,
  DeepPartial,
  FindOneOptions,
  getRepository,
  Repository,
} from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Category } from '../categories/category.entity';
import { CategoriesService } from '../categories/categories.service';
import { ProductView } from './enities/product-view.entity';
import { HOST_ADDRESS } from '../../config/configuration';

@Injectable()
export class ProductsService {
  private uploadsUrl: string = `http://${HOST_ADDRESS}:${process.env.SERVER_PORT}/uploads/`;

  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    @InjectRepository(ProductView)
    private readonly viewsRepository: Repository<ProductView>,
    private readonly categoriesService: CategoriesService,
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

  public async findOne(id: string): Promise<Product | null> {
    const options: FindOneOptions<Product> = {
      where: { id, isDeleted: false },
      relations: ['category', 'views'],
    };
    const product = await this.productsRepository.findOne(options);
    if (!product) {
      return null;
    }
    const view = new ProductView();
    view.product = product;
    await this.viewsRepository.save(view);
    return this.productsRepository.findOne(options);
  }

  public async count(category?: string): Promise<number> {
    const wereOptions = { isDeleted: false };
    category ? Object.assign(wereOptions, { category }) : null;
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
