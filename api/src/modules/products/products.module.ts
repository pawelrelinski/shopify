import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { OrderProduct } from './entities/order-product.entity';
import { CategoriesModule } from '../categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { ProductView } from './entities/product-view.entity';
import { OrderProductsService } from './order-products.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Product, OrderProduct, ProductView]),
    CategoriesModule,
  ],
  providers: [ProductsService, OrderProductsService],
  controllers: [ProductsController],
  exports: [OrderProductsService],
})
export class ProductsModule {}
