import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  public readonly email: string;

  @IsNotEmpty()
  @IsEmail()
  public readonly password: string;
}
