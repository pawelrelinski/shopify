import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserAddress } from './entities/user-address.entity';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAddressController } from './user-address.controller';
import { UserAddressService } from './user-address.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserAddress])],
  controllers: [UsersController, UserAddressController],
  providers: [UsersService, UserAddressService],
  exports: [UsersService],
})
export class UsersModule {}
