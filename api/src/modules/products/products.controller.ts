import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Header,
  HttpStatus,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { MappedType } from '@nestjs/mapped-types';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create product' })
  @ApiBody({
    type: CreateProductDto,
    required: true,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The product has been successfully created.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden.',
  })
  @Post()
  @Header('Content-Type', 'application/json')
  public async create(
    @Body('product') createProductDto: CreateProductDto | any,
  ) {
    const product = await this.productsService.create(createProductDto);
    return {
      product: product,
      status: HttpStatus.CREATED,
      message: 'Product has been created',
    };
  }

  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return all products.' })
  @ApiQuery({
    name: 'category',
    type: 'string',
    required: false,
    example: 'solar-panels',
    description: 'Format name of category',
  })
  @ApiQuery({
    name: 'sortBy',
    type: 'string',
    required: false,
    example: 'defaultPrice',
    description: 'Name of column by which rows will sort',
  })
  @ApiQuery({
    name: 'sortMethod',
    type: 'string',
    required: false,
    example: 'ASC',
  })
  @ApiQuery({ name: 'limit', type: 'number', required: false })
  @ApiQuery({ name: 'offset', type: 'number', required: false })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  public async findAll(
    @Query('category') category?: string,
    @Query('sortBy', new DefaultValuePipe('created_on')) sortBy?: string,
    @Query('sortMethod', new DefaultValuePipe('DESC')) sortMethod?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset?: number,
    @Query('minPrice', new DefaultValuePipe(0), ParseFloatPipe)
    minPrice?: number,
    @Query(
      'maxPrice',
      new DefaultValuePipe(Number.MAX_SAFE_INTEGER),
      ParseFloatPipe,
    )
    maxPrice?: number,
  ) {
    const query = { sortBy, sortMethod, limit, offset, minPrice, maxPrice };
    category ? Object.assign(query, { category }) : null;

    const products = await this.productsService.findAll(query);
    return {
      count: products.length,
      products,
    };
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No products found',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return product',
  })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  public async findOne(@Param('id') id: Product['id']) {
    const product = await this.productsService.findOneById(id);
    if (!product) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'Not found product',
      };
    }

    return product;
  }

  @ApiOperation({ summary: 'Update product by id' })
  @ApiCreatedResponse({
    status: 201,
    description: 'The article has been successfully updated.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Patch(':id')
  public update(
    @Param('id') id: Product['id'],
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Delete product' })
  @ApiOkResponse({
    status: 201,
    description: 'The product has been successfully deleted.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  public remove(@Param('id') id: Product['id']) {
    return this.productsService.remove(id);
  }
}
