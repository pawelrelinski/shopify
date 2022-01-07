import { Controller, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  public findAll(): Array<string> {
    return ['prd1', 'prd2', 'prd3'];
  }

  @Get(':id')
  public findOne(@Param() params): string {
    return `Product with ${params.id}`;
  }
}
