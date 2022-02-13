import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderProduct } from '../../products/enities/order-product.entity';
import { User } from '../../users/user.entity';

export class CreateOrderDto {
  @ApiProperty()
  shippingMethod: string;

  @ApiProperty({
    type: OrderProduct,
    isArray: true,
  })
  products: OrderProduct[];

  @ApiPropertyOptional()
  comments?: string;

  @ApiProperty({
    type: User['id'],
  })
  user: number;
}
