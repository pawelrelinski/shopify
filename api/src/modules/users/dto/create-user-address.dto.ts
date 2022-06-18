import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class CreateUserAddressDto {
  @ApiProperty()
  country: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  postal_code: string;

  @ApiProperty()
  street_name: string;

  @ApiProperty()
  house_number: string;

  @ApiProperty()
  user: User;
}
