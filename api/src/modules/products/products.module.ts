import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { OrderProduct } from './order-product.entity';
import { CategoriesModule } from '../categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { ProductView } from './product-view.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Product, OrderProduct, ProductView]),
    CategoriesModule,
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
