import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateOrderDto } from '@modules/orders/dto/create-order.dto';
import { OrdersService } from '@modules/orders/orders.service';
import { Order } from '@modules/orders/entities/order.entity';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return all orders.',
    isArray: true,
  })
  @Get()
  public async findAll(): Promise<{ orders: Order[] }> {
    const orders: Order[] = await this.ordersService.findAll();
    return { orders };
  }

  @ApiOperation({ summary: 'Create order' })
  @ApiBody({
    type: CreateOrderDto,
    required: true,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'Order has been successfully created.',
  })
  @Post()
  public async create(@Body() orderDto: CreateOrderDto): Promise<{}> {
    const order = await this.ordersService.create(orderDto);
    return { order };
  }
}
