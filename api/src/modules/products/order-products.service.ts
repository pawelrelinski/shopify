import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from './enities/order-product.entity';
import { Repository } from 'typeorm';
import { Order } from '../orders/order.entity';

@Injectable()
export class OrderProductsService {
  constructor(
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,
  ) {}

  public async createMany(
    orderProducts: OrderProduct[],
    order: Order,
  ): Promise<OrderProduct[]> {
    const createdOrderProducts: OrderProduct[] = [];
    for (const orderProduct of orderProducts) {
      const product = new OrderProduct();
      product.product = orderProduct.product;
      product.quantity = orderProduct.quantity;
      product.order = order;

      const createdProduct = await this.orderProductRepository.save(product);
      createdOrderProducts.push(createdProduct);
    }
    return createdOrderProducts;
  }
}