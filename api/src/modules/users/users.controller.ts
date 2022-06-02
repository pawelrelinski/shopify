import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '@modules/users/users.service';
import { FindAllUsersDto } from '@modules/users/dto/find-all-users.dto';
import { User } from '@modules/users/entities/user.entity';
import { FindOneById } from '@modules/users/dto/find-one-by-id.dto';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResponse } from '@models/error-response';
import { JwtAuthGuard } from '@modules/auth/jwt-auth.guard';
import { Roles } from '@modules/auth/decorators/roles.decorator';
import { Role } from '@modules/auth/enums/role.enum';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users.' })
  @ApiHeader({
    name: 'User-Roles',
    required: false,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return all users.',
    isArray: true,
  })
  @Get()
  @Roles(Role.ADMIN)
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
  @ApiHeader({
    name: 'User-Roles',
    required: false,
    description: 'User role, if they is the admin they has access to data',
    example: 'admin',
  })
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return users count.' })
  @Get('metrics')
  @Roles(Role.ADMIN)
  public async metrics(): Promise<{ count: number }> {
    const count: number = await this.usersService.count();
    return { count };
  }

  @ApiOperation({ summary: 'Get user by given id' })
  @ApiParam({
    name: 'id',
    type: 'string',
    required: true,
    description: 'User id',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return user by given id.',
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found user with given id',
  })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  public async findOneById(
    @Param('id') id: User['id'],
  ): Promise<FindOneById | ErrorResponse> {
    const user: FindOneById['user'] = await this.usersService.findOneById(id);
    if (!user) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Not found user with given id',
      };
    }
    return { user };
  }

  @ApiOperation({ summary: 'Update specific user attribute' })
  @ApiParam({
    name: 'id',
    type: 'string',
    required: true,
    description: 'User id',
  })
  @ApiQuery({
    name: 'attrName',
    type: 'string',
    required: true,
    example: 'firstName',
    description: "Name of user's column",
  })
  @ApiQuery({
    name: 'attrValue',
    type: 'string',
    required: true,
    example: 'John',
    description: "New value for user's column",
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully updated.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden.',
  })
  @Patch(':id/attribute')
  public async updateAttribute(
    @Param('id') id: User['id'],
    @Query('attrName') attrName: string,
    @Query('attrValue') attrValue: string,
  ): Promise<User> {
    return this.usersService.findOneByIdAndUpdate(id, attrName, attrValue);
  }
}
