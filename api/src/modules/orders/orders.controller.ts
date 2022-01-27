import { Controller, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  public create() {}
}
