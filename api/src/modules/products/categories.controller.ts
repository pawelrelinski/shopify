import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { MappedType } from '@nestjs/mapped-types';
import { Category } from './entities/category.entity';
import { Public } from '../auth/public.decorator';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create category' })
  @ApiBearerAuth()
  @ApiBody({
    type: CreateCategoryDto,
    required: true,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The category has been successfully created.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden.',
  })
  @Post()
  public async create(
    @Body('category') createCategoryDto: MappedType<Partial<CreateCategoryDto>>,
  ) {
    const category = await this.categoriesService.create(createCategoryDto);
    return {
      category,
      status: HttpStatus.CREATED,
      message: 'Category has been created',
    };
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return all categories.',
  })
  @Public()
  @Get()
  public async findAll() {
    const categories = await this.categoriesService.findAll();
    return { categories };
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No category found',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return category',
  })
  @Public()
  @Get(':id')
  public findOne(@Param('id') id: Category['id']) {
    return this.categoriesService.findById(id);
  }
}
