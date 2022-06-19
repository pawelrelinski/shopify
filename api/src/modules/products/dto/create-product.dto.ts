import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  default_price: number;

  @ApiProperty()
  category_id: string;
}
