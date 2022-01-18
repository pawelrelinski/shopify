import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public password: string;
}
