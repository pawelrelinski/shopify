import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { MappedType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  public async create(
    createCategoryDto: MappedType<Partial<CreateCategoryDto>>,
  ) {
    return this.categoryRepository.save(createCategoryDto);
  }

  public async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  public async findById(id: Category['id']): Promise<Category | any> {
    const options = {
      where: { id },
    };
    let category: Category = await this.categoryRepository.findOne(options);

    if (!category) {
      return null;
    }

    return category;
  }

  public async findByFormatName(formatName: string) {
    return this.categoryRepository.findOne({
      where: { format_name: formatName },
    });
  }
}
