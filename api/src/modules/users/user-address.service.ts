import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAddress } from './entities/user-address.entity';
import { Repository } from 'typeorm';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddress)
    private userAddressRepository: Repository<UserAddress>,
  ) {}

  public async create(createUserAddressDto: CreateUserAddressDto) {
    return await this.userAddressRepository.save(createUserAddressDto);
  }

  public async findAll() {
    return await this.userAddressRepository.find();
  }

  public async findOneById(id: UserAddress['id']) {
    const options = {
      where: { id },
    };
    return await this.userAddressRepository.findOne(options);
  }

  public async findOneByUserId(userId: UserAddress['user']) {
    const options = {
      where: { user: userId },
    };
    return await this.userAddressRepository.findOne(options);
  }

  public async update(
    id: UserAddress['id'],
    updateUserAddressDto: UpdateUserAddressDto,
  ) {
    const options = {
      where: { id },
    };
    const userAddress = await this.userAddressRepository.findOne(options);
    if (!userAddress) {
      return null;
    }

    const toUpdate = Object.assign(userAddress, updateUserAddressDto);
    return await this.userAddressRepository.save(toUpdate);
  }

  public async remove(id: UserAddress['id']) {
    const options = {
      where: { id },
    };
    const userAddress = await this.userAddressRepository.findOne(options);
    if (!userAddress) {
      return null;
    }

    const toRemove = Object.assign(userAddress, { is_deleted: true });
    return await this.userAddressRepository.save(toRemove);
  }
}
