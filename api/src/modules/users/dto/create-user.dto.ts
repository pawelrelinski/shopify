export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number?: string;
}
