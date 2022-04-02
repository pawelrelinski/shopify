import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Header,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductResponseDto } from './dto/create-product-response.dto';
import { DeleteProductResponseDto } from './dto/delete-product-response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ErrorResponse } from '../../models/error-response';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { options as localOptions } from '../../utils/fileInterceptorLocalOptions';
import { FindAllResponseDto } from './dto/find-all-response.dto';
import { FindByViewsCountResponseDto } from './dto/find-by-views-count-response.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  private uploadsUrl = `http://${process.env.HOST_ADDRESS}:${process.env.SERVER_PORT}/${process.env.UPLOADS_DIRECTORY}/`;

  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get all products' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    isArray: true,
    description: 'Return all products.',
  })
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
  @Get()
  public async findAll(
    @Query('category') category?: string,
    @Query('sortBy', new DefaultValuePipe('createdAt')) sortBy?: string,
    @Query('sortMethod', new DefaultValuePipe('DESC')) sortMethod?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset?: number,
  ): Promise<FindAllResponseDto> {
    const query = {
      sortBy,
      sortMethod,
      limit,
      offset,
    };
    category ? Object.assign(query, { category }) : null;
    const products: Product[] = await this.productsService.findAll(query);

    let productsCountInCategory: number;
    if (category) {
      productsCountInCategory = await this.productsService.count(category);
      return {
        productsCountInCategory,
        products,
      };
    }

    productsCountInCategory = await this.productsService.count();
    return {
      productsCountInCategory,
      products,
    };
  }

  @ApiOperation({ summary: 'Get products by views count' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    isArray: true,
    description: 'Return products views by given filter.',
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
  @Get('views')
  @Roles(Role.ADMIN)
  public async findByViewsCount(
    @Query('category') category?: string,
    @Query('sortBy', new DefaultValuePipe('createdAt')) sortBy?: string,
    @Query('sortMethod', new DefaultValuePipe('DESC')) sortMethod?: string,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset?: number,
  ): Promise<FindByViewsCountResponseDto> {
    const query = {
      sortBy,
      sortMethod,
      limit,
      offset,
    };
    return await this.productsService.findMostPopularFromLastDays(query);
  }

  @ApiOperation({ summary: 'Add image' })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description:
      'Return object containing file metadata and access information.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Post('image')
  @UseInterceptors(FileInterceptor('image', localOptions))
  public async addImage(
    @UploadedFile() image: Express.Multer.File,
  ): Promise<Express.Multer.File> {
    return image;
  }

  @ApiOperation({
    summary: 'Get count of all products or products from given category',
  })
  @ApiQuery({
    name: 'category',
    type: 'string',
    required: false,
    example: 'solar-panels',
    description: 'Format name of category',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return products count.',
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
  @ApiHeader({
    name: 'Authorization',
    required: true,
    description: 'JWT token',
  })
  @Get('metrics')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  public async metrics(
    @Query('category') category: string,
  ): Promise<{ count: number }> {
    const count: number = await this.productsService.count(category);
    return { count };
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return product.' })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found product.',
  })
  @ApiParam({
    type: 'string',
    name: 'id',
    description: 'Product id.',
    allowEmptyValue: false,
    required: true,
  })
  @Get(':id')
  @Header('Cross-Origin-Embedder-Policy', 'unsafe-none')
  public async findOne(
    @Param('id') id: string,
  ): Promise<Product | ErrorResponse> {
    const product: Product | null = await this.productsService.findOne(id);
    if (!product) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Not found product',
      };
    }
    product.image = `${this.uploadsUrl}${product.image}`;
    return product;
  }

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
    description: 'Forbidden resource.',
  })
  @ApiHeader({
    name: 'User-Roles',
    required: false,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @Post()
  @Roles(Role.ADMIN)
  public async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<CreateProductResponseDto> {
    const product: Product = await this.productsService.create(
      createProductDto,
    );
    return {
      product: product,
      status: HttpStatus.CREATED,
      message: 'Product has been created',
    };
  }

  @ApiOperation({ summary: 'Delete product by given id' })
  @ApiParam({
    type: 'string',
    name: 'id',
    description: 'Product id.',
    allowEmptyValue: false,
    required: true,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The product has been successfully deleted.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @ApiHeader({
    name: 'User-Roles',
    required: true,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @ApiHeader({
    name: 'Authorization',
    required: true,
    description: 'JWT token',
  })
  @Delete(':id')
  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard)
  public async findOneAndDelete(
    @Param('id') id: string,
  ): Promise<DeleteProductResponseDto> {
    await this.productsService.delete(id);
    return {
      status: HttpStatus.OK,
      message: 'Product has been deleted',
    };
  }
}
