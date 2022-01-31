import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { DeleteResult, FindManyOptions, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ListAllProductsDto } from './dto/list-all-products.dto';
import { Category } from '../categories/category.entity';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly categoriesService: CategoriesService,
  ) {}

  public async findAll(): Promise<Product[]> {
    return await this.productsRepository.find({
      relations: ['category'],
    });
  }

  public async findAllByFilter(
    sortBy: ListAllProductsDto['sortBy'],
    sortMethod: ListAllProductsDto['sortMethod'],
    take: ListAllProductsDto['take'],
    skip: ListAllProductsDto['skip'],
    category: ListAllProductsDto['category'],
  ): Promise<Product[]> {
    let whereClauseCondition = {};
    if (category) {
      const categoryEntityObject =
        await this.categoriesService.findByFormatName(category);
      whereClauseCondition = { category: categoryEntityObject };
    }
    const recordsToSkip = skip * take;
    const findOptions: FindManyOptions<Product> = {
      where: whereClauseCondition,
      order: {
        [sortBy]: sortMethod,
      },
      skip: recordsToSkip,
      take,
      relations: ['category'],
    };

    return this.productsRepository.find(findOptions);
  }

  public async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  public async count(category?: string): Promise<number> {
    const options = category ? { where: { category } } : {};
    return this.productsRepository.count(options);
  }

  public async create(product: CreateProductDto): Promise<Product> {
    const category: Category = await this.categoriesService.findByFormatName(
      product.category,
    );
    product.category = category.id;
    return this.productsRepository.save(product);
  }

  public async delete(id: string): Promise<DeleteResult> {
    const product: Product = await this.findOne(id);
    return this.productsRepository.delete({ id: product.id });
  }
}
