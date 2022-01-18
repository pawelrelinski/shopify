import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { DeleteResult, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ListAllProductsDto } from './dto/list-all-products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  public async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  public async findAllByFilter(
    sortBy: ListAllProductsDto['sortBy'],
    sortMethod: ListAllProductsDto['sortMethod'],
    take: ListAllProductsDto['take'],
    skip: ListAllProductsDto['skip'],
  ): Promise<Product[]> {
    return this.productsRepository.find({
      order: {
        [sortBy]: sortMethod,
      },
      skip,
      take,
    });
  }

  public async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  public async create(product: CreateProductDto): Promise<Product> {
    return this.productsRepository.save(product);
  }

  public async delete(id: string): Promise<DeleteResult> {
    const product: Product = await this.findOne(id);
    return this.productsRepository.delete({ id: product.id });
  }
}
