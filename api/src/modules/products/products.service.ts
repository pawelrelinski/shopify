import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import {
  Brackets,
  DataSource,
  getConnection,
  getRepository,
  Repository,
} from 'typeorm';
import { MappedType } from '@nestjs/mapped-types';
import { ProductView } from './entities/productView.entity';
import { CategoriesService } from './categories.service';
import { ProductAttribute } from './entities/productAttribute.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
    @InjectRepository(ProductView)
    private productViewsRepository: Repository<ProductView>,
    @InjectRepository(ProductAttribute)
    private productAttributeRepository: Repository<ProductAttribute>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    private readonly categoriesService: CategoriesService,
    private dataSource: DataSource,
  ) {}

  public async create(createProductDto: CreateProductDto) {
    const { name, default_price, category_id } = createProductDto;
    const category = await this.categoriesService.findById(category_id);
    if (!category) {
      return {
        message: 'Invalid category id',
      };
    }

    let product: Product = new Product();
    product.category = category;
    product.name = name;
    product.default_price = default_price;

    return await this.productsRepository.save(product);
  }

  public async findAll(query: any): Promise<Product[]> {
    const qb = await this.dataSource
      .getRepository(Product)
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.attributes', 'attributes')
      .leftJoinAndSelect('product.views', 'views')
      .leftJoinAndSelect('product.category', 'category')
      .where('product.is_deleted = :isDeleted', { isDeleted: false });

    if ('category' in query) {
      const category = await this.categoriesService.findByFormatName(
        query.category,
      );
      qb.andWhere(
        new Brackets((qb) => {
          qb.where('product.category = :id', { id: category.id });
        }),
      );
    }

    const sort = `product.${query.sortBy}`;
    const order = query.sortMethod.toUpperCase();
    qb.orderBy(sort, order);

    qb.take(query.limit);
    qb.skip(query.offset);

    qb.printSql();
    return await qb.getMany();
  }

  public async findOneById(id: Product['id']): Promise<Product | null> {
    const options = {
      where: { id },
      relations: ['category', 'views', 'attributes'],
    };
    let product = await this.productsRepository.findOne(options);

    if (!product) {
      return null;
    }

    const productView = new ProductView();
    productView.product = product;
    await this.productViewsRepository.save(productView);

    return await this.productsRepository.findOne(options);
  }

  public update(id: Product['id'], updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  public remove(id: Product['id']) {
    return `This action removes a #${id} product`;
  }
}
