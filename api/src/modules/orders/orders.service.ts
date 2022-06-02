import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '@modules/orders/entities/order.entity';
import { CreateOrderDto } from '@modules/orders/dto/create-order.dto';
import { OrderProduct } from '@modules/products/entities/order-product.entity';
import { OrderProductsService } from '@modules/products/order-products.service';
import { User } from '@modules/users/entities/user.entity';
import { UsersService } from '@modules/users/users.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly orderProductsService: OrderProductsService,
    private readonly usersService: UsersService,
  ) {}

  public async findAll(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  public async create(orderDto: CreateOrderDto) {
    const { products, shippingMethod, comments, user: userId } = orderDto;
    const order = new Order();

    const orderProducts: OrderProduct[] =
      await this.orderProductsService.createMany(products, order);
    const user: User = await this.usersService.findOneById(userId);

    order.products = orderProducts;
    order.shippingMethod = shippingMethod;
    order.comments = comments;
    order.user = user;

    return await this.orderRepository.save(order);
  }
}
