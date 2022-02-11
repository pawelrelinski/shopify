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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users.' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all users.' })
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

  @ApiOperation({ summary: 'Get count of all users' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return users count.' })
  @Get('count')
  @HttpCode(HttpStatus.OK)
  public async count(): Promise<{ count: number }> {
    const count: number = await this.usersService.count();
    return { count };
  }

  @ApiOperation({ summary: 'Get user by given id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Return user by given id.',
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findOneById(@Param('id') id: User['id']): Promise<FindOneById> {
    const user: FindOneById['user'] = await this.usersService.findOneById(id);
    return { user };
  }

  @ApiOperation({ summary: 'Update specific user attribute' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Patch(':id/attribute')
  @HttpCode(HttpStatus.OK)
  public async updateAttribute(
    @Param('id') id: User['id'],
    @Query('attrName') attrName: string,
    @Query('attrValue') attrValue: string,
  ): Promise<User> {
    return this.usersService.findOneByIdAndUpdate(id, attrName, attrValue);
  }
}
