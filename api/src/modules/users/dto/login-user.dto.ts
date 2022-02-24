import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public readonly password: string;
}
