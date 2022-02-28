import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  public readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
<<<<<<< HEAD
=======
  @IsString()
>>>>>>> api_testing
  public readonly password: string;
}
