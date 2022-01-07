import { Module } from '@nestjs/common';
import { ProductsController } from './productsController';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
