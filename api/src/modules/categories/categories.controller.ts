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
import {
  ApiForbiddenResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiQuery({
    name: 'formatName',
    type: 'string',
    required: false,
    example: 'solar-panels',
    description: 'Format name of category',
  })
  @ApiQuery({ name: 'limit', type: 'number', required: false })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return all categories.',
    isArray: true,
  })
  @Get()
  public async findAll(
    @Query('formatName') formatName?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
  ): Promise<FindAllCategoriesDto> {
    const query = { limit };
    formatName ? Object.assign(query, { formatName }) : null;
    const categories: Category[] = await this.categoriesService.findAll(query);
    return { categories };
  }

  @ApiOperation({ summary: 'Get categories by views count' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return categories views by given filter.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @ApiHeader({
    name: 'User-Roles',
    required: false,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @Get('views')
  @Roles(Role.ADMIN)
  public async findByViewsCount(@Query() query): Promise<any[]> {
    return await this.categoriesService.findAllWithViewsCount(query);
  }

  @ApiOperation({ summary: 'Get product count in category' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return count of products in categories.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @ApiHeader({
    name: 'User-Roles',
    required: false,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @Get('productsCount')
  @Roles(Role.ADMIN)
  public async findAllWithProductsCount(): Promise<FindAllCategoriesWithProductsCountDto> {
    return this.categoriesService.findAllWithProductsCount();
  }

  @ApiOperation({ summary: 'Get count of categories' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return count of categories.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @ApiHeader({
    name: 'User-Roles',
    required: false,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @Get('metrics')
  @Roles(Role.ADMIN)
  public async metrics(): Promise<{ count: number }> {
    const count = await this.categoriesService.count();
    return { count };
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiParam({
    type: 'number',
    name: 'id',
    description: 'Category id.',
    allowEmptyValue: false,
    required: true,
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return category by given id.',
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Category not found',
  })
  @Get(':id')
  public async finById(
    @Param('id', ParseIntPipe) id: number,
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
