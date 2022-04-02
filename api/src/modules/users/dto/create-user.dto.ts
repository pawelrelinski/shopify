import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public readonly password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public readonly lastName: string;
}
