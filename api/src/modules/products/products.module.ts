import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsController } from '@modules/products/products.controller';
import { ProductsService } from '@modules/products/products.service';
import { Product } from '@modules/products/entities/product.entity';
import { OrderProduct } from '@modules/products/entities/order-product.entity';
import { CategoriesModule } from '@modules/categories/categories.module';
import { ProductView } from '@modules/products/entities/product-view.entity';
import { OrderProductsService } from '@modules/products/order-products.service';
import { ProductAttributes } from '@modules/products/entities/product-attributes.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      Product,
      OrderProduct,
      ProductView,
      ProductAttributes,
    ]),
    CategoriesModule,
  ],
  providers: [ProductsService, OrderProductsService],
  controllers: [ProductsController],
  exports: [OrderProductsService],
})
export class ProductsModule {}
