import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  public readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  public readonly password: string;
}
