import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  format_name: string;
}
