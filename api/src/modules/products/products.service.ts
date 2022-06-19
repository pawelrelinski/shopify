import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brackets, DataSource, Repository } from 'typeorm';
import { ProductView } from './entities/product-view.entity';
import { CategoriesService } from './categories.service';
import { ProductAttribute } from './entities/product-attribute.entity';
import { Category } from './entities/category.entity';

@Injectable()
export class ProductsService {
  private readonly BASE_URL = process.env.BASE_URL;

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

  public async create(
    createProductDto: CreateProductDto,
  ): Promise<Product | { message: string }> {
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

    qb.orderBy(sort, order).take(query.limit).skip(query.offset);

    const products = await qb.getMany();

    products.forEach((product) => {
      product.image_path = `${this.BASE_URL}/${product.image_path}`;
    });

    return products;
  }

  public async findOneById(id: Product['id']): Promise<Product | null> {
    const options = {
      where: { id, is_deleted: false },
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

  public async update(
    id: Product['id'],
    updateProductDto: UpdateProductDto,
  ): Promise<Product & UpdateProductDto> {
    const options = {
      where: { id },
    };
    const product = await this.productsRepository.findOne(options);
    const toUpdate = Object.assign(product, updateProductDto);
    return await this.productsRepository.save(toUpdate);
  }

  public async remove(id: Product['id']): Promise<Product> {
    const options = {
      where: { id },
    };
    const product = await this.productsRepository.findOne(options);
    product.is_deleted = true;
    return await this.productsRepository.save(product);
  }
}
