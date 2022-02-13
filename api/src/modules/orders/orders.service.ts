import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderProduct } from '../products/enities/order-product.entity';
import { OrderProductsService } from '../products/order-products.service';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';

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
