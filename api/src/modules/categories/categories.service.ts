import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  public async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  public async findByFormatName(formatName: string): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { formatName },
    });
  }

  public async findById(id: number): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }
}
