import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { FindOneParams } from './classes/find-one-params';
import { CreateProductDto } from './dto/create-product.dto';
import { ListAllProductsDto } from './dto/list-all-products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<{ products: Product[] }> {
    const products: Product[] = await this.productsService.findAll();
    return {
      products: products,
    };
  }

  @Get('findByFilter')
  @HttpCode(HttpStatus.OK)
  public async findAllByFilter(
    @Query('sortBy') sortBy: ListAllProductsDto['sortBy'],
    @Query('sortMethod') sortMethod: ListAllProductsDto['sortMethod'],
    @Query('limit') take: ListAllProductsDto['take'],
    @Query('offset') skip: ListAllProductsDto['skip'],
  ): Promise<{ products: Product[] }> {
    const products: Product[] = await this.productsService.findAllByFilter(
      sortBy,
      sortMethod,
      take,
      skip,
    );
    return {
      products: products,
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public findOne(@Param() params: FindOneParams): Promise<Product> {
    const { id } = params;
    return this.productsService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }
}
