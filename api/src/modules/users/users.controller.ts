import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { FindAllUsersDto } from './dto/find-all-users.dto';
import { User } from './user.entity';
import { FindOneById } from './dto/find-one-by-id.dto';

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
        createdAt: user.createdAt,
      };
    });
  }

  @Get('count')
  @HttpCode(HttpStatus.OK)
  public async count(): Promise<{ count: number }> {
    const count: number = await this.usersService.count();
    return { count };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findOneById(@Param('id') id: User['id']): Promise<FindOneById> {
    const user: FindOneById['user'] = await this.usersService.findOneById(id);
    return { user };
  }

  @Patch(':id/attribute')
  @HttpCode(HttpStatus.OK)
  public async updateAttribute(
    @Param('id') id: User['id'],
    @Query('attrName') attrName: string,
    @Query('attrValue') attrValue: string,
  ): Promise<User> {
    return this.usersService.findOneByIdAndUpdateOperation(
      id,
      attrName,
      attrValue,
    );
  }
}
