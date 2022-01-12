import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  public async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  public async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  public async create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  public async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
