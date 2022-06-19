import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiBearerAuth()
  @ApiBody({
    type: CreateUserDto,
    required: true,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully created.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden.',
  })
  @Post()
  public async create(@Body() createUserDto: CreateUserDto | any) {
    const user = await this.usersService.create(createUserDto);
    return {
      user,
      status: HttpStatus.CREATED,
      message: 'User has been created',
    };
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiBearerAuth()
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return all users.' })
  @Get()
  public async findAll() {
    const users = await this.usersService.findAll();
    return {
      count: users.length,
      users,
    };
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiBearerAuth()
  @ApiQuery({ name: 'email', type: String, required: false })
  @ApiQuery({ name: 'email', type: String, required: false })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No user found',
  })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return user',
  })
  @Get('/me')
  public async findOne(
    @Query('id') id: User['id'] = null,
    @Query('email') email: string = null,
  ) {
    let user;

    email
      ? (user = await this.usersService.findOneByEmail(email))
      : (user = await this.usersService.findOneById(id));

    if (!user) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'User not found',
      };
    }

    return { user };
  }

  @ApiOperation({ summary: 'Update user by id' })
  @ApiBearerAuth()
  @ApiBody({
    type: UpdateUserDto,
    required: true,
  })
  @ApiCreatedResponse({
    status: 201,
    description: 'The user has been successfully updated.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Patch(':id')
  public async update(
    @Param('id') id: User['id'],
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(id, updateUserDto);
    return { user };
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiBearerAuth()
  @ApiOkResponse({
    status: 201,
    description: 'The user has been successfully deleted.',
  })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':id')
  public async remove(@Param('id') id: User['id']) {
    await this.usersService.remove(id);
    return {
      message: 'The user has been successfully deleted.',
    };
  }
}
