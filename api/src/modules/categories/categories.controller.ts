import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { FindAllCategoriesDto } from './dto/find-all-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<FindAllCategoriesDto> {
    const categories: Category[] = await this.categoriesService.findAll();
    return { categories };
  }
}
