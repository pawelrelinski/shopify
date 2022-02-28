import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
<<<<<<< HEAD
import { OrderProduct } from '../../products/entities/order-product.entity';
import { User } from '../../users/entities/user.entity';
=======
import { OrderProduct } from '../../products/enities/order-product.entity';
import { User } from '../../users/user.entity';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
>>>>>>> api_testing

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  shippingMethod: string;

  @ApiProperty({
    type: OrderProduct,
    isArray: true,
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @Type(() => OrderProduct)
  products: OrderProduct[];

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comments?: string;

  @ApiProperty({
    type: User['id'],
  })
  @IsNotEmpty()
  @IsNumber()
  user: number;
}
