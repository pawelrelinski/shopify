import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../categories/entities/category.entity';
import { DeepPartial } from 'typeorm';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  defaultPrice: number;

  @ApiProperty()
  promotionPrice?: number;

  @ApiProperty()
  category: Category | DeepPartial<Category> | number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  producer: string;

  @ApiProperty()
  expectedDeliveryTime: number;

  @ApiProperty()
  refNumber: string;

  @ApiProperty()
  dataSheet: string;

  @ApiProperty()
  isPublished: boolean;

  @ApiProperty()
  image: any;
}
