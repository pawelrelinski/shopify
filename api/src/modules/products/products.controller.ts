import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  public async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  public async findOne(@Param() params): Promise<Product> {
    const { id } = params;
    return this.productsService.findOne(id);
  }

  @Post()
  public async create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }
}
