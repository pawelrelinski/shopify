import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { FindAllCategoriesDto } from './dto/find-all-categories.dto';
import { FindAllCategoriesWithProductsCountDto } from './dto/find-all-categories-with-products-count.dto';
import { ErrorResponse } from '../../models/error-response';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all categories.' })
  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(
    @Query('formatName') formatName?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
  ): Promise<FindAllCategoriesDto> {
    const query = { formatName, limit };
    const categories: Category[] = await this.categoriesService.findAll(query);
    return { categories };
  }

  @ApiOperation({ summary: 'Get categories by views count' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return categories views by given filter.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Get('views')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  public async findByViewsCount(@Query() query) {
    return await this.categoriesService.findAllWithViewsCount(query);
  }

  @ApiOperation({ summary: 'Get product count in category' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return count of products in categories.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Get('productsCount')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  public async findAllWithProductsCount(): Promise<FindAllCategoriesWithProductsCountDto> {
    return this.categoriesService.findAllWithProductsCount();
  }

  @ApiOperation({ summary: 'Get count of categories' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return count of categories.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Get('count')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  public async count(): Promise<{ count: number }> {
    const count = await this.categoriesService.count();
    return { count };
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return category by given id.',
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async finById(
    @Param('id') id: number,
  ): Promise<Category | ErrorResponse> {
    const category: Category | null = await this.categoriesService.findById(id);
    if (!category) {
      return {
        message: 'Category not found',
        statusCode: HttpStatus.NOT_FOUND,
      };
    }
    return category;
  }
}
