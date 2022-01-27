import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { FindAllUsersDto } from './dto/find-all-users.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  public async findAll(): Promise<FindAllUsersDto[]> {
    const users: User[] = await this.usersService.findAll();
    return users.map((user: User) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
    });
  }
}
