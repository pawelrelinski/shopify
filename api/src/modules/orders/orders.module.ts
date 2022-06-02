import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from '@modules/orders/orders.controller';
import { OrdersService } from '@modules/orders/orders.service';
import { Order } from '@modules/orders/entities/order.entity';
import { ProductsModule } from '@modules/products/products.module';
import { UsersModule } from '@modules/users/users.module';
import { DeliveryMethodEntity } from '@modules/orders/entities/delivery-method.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    ProductsModule,
    UsersModule,
    DeliveryMethodEntity,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
