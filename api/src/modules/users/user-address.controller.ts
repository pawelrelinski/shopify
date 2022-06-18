import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserAddressService } from './user-address.service';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UserAddress } from './entities/user-address.entity';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@ApiTags('users-address')
@Controller('users-address')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}

  @ApiOperation({ summary: 'Create user address' })
  @ApiBody({
    type: CreateUserAddressDto,
    required: true,
  })
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'The user address has been successfully created.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden.',
  })
  @Post()
  public async create(@Body() createUserAddressDto: CreateUserAddressDto) {
    const userAddress = await this.userAddressService.create(
      createUserAddressDto,
    );
    return {
      userAddress,
      status: HttpStatus.CREATED,
      message: 'User address has been created',
    };
  }

  @ApiOperation({ summary: 'Get all user addresses' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return all user addresses.',
  })
  @Get()
  public async findAll() {
    const userAddresses = await this.userAddressService.findAll();
    return {
      count: userAddresses.length,
      userAddresses,
    };
  }

  @ApiOperation({ summary: 'Get user address by id' })
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return user address.' })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User address not found.',
  })
  @Get(':id')
  public async findOne(@Param('id') id: UserAddress['id']) {
    const userAddress = await this.userAddressService.findOneById(id);
    if (!userAddress) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'User address not found',
      };
    }
    return {
      userAddress,
      status: HttpStatus.OK,
    };
  }

  @ApiOperation({ summary: 'Get user address by user id' })
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return user address.' })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User address not found.',
  })
  @Get(':userId')
  public async findOneByUserId(@Param('userId') userId: UserAddress['user']) {
    const userAddress = await this.userAddressService.findOneByUserId(userId);
    if (!userAddress) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'User address not found',
      };
    }
    return {
      userAddress,
      status: HttpStatus.OK,
    };
  }

  @ApiOperation({ summary: 'Update user address by id' })
  @ApiBody({
    type: UpdateUserAddressDto,
    required: true,
  })
  @ApiOkResponse({ status: HttpStatus.OK, description: 'Return user address.' })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User address not found.',
  })
  @Post(':id')
  public async update(
    @Param('id') id: UserAddress['id'],
    @Body() updateUserAddressDto: UpdateUserAddressDto,
  ) {
    const userAddress = await this.userAddressService.update(
      id,
      updateUserAddressDto,
    );
    if (!userAddress) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'User address not found',
      };
    }
    return {
      userAddress,
    };
  }

  @ApiOperation({ summary: 'Delete user address by id' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'User address has been deleted.',
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User address not found.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden.',
  })
  @Delete(':id')
  public async delete(@Param('id') id: UserAddress['id']) {
    const userAddress = await this.userAddressService.remove(id);
    if (!userAddress) {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'User address not found',
      };
    }
    return {
      message: 'User address has been deleted',
    };
  }
}
