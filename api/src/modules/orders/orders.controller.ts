import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
import { Order } from './entities/order.entity';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all orders.' })
  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<{ orders: Order[] }> {
    const orders: Order[] = await this.ordersService.findAll();
    return { orders };
  }

  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Order has been successfully created.',
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() orderDto: CreateOrderDto): Promise<{}> {
    const order = await this.ordersService.create(orderDto);
    return { order };
  }
}
