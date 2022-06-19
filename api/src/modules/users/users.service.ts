import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  public create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  public findAll() {
    return this.userRepository.find();
  }

  public findOneById(id: User['id']) {
    const options = {
      where: { id },
    };
    return this.userRepository.findOne(options);
  }

  public findOneByEmail(email: User['email']) {
    const options = {
      where: { email },
    };
    return this.userRepository.findOne(options);
  }

  public async update(id: User['id'], updateUserDto: UpdateUserDto) {
    const options = {
      where: { id },
    };
    const user = await this.userRepository.findOne(options);
    if (!user) {
      return null;
    }

    const toUpdate = Object.assign(user, updateUserDto);
    return await this.userRepository.save(toUpdate);
  }

  public async remove(id: User['id']) {
    const options = {
      where: { id },
    };
    const user = await this.userRepository.findOne(options);
    if (!user) {
      return null;
    }

    const toRemove = Object.assign(user, { is_deleted: true });
    return await this.userRepository.save(toRemove);
  }
}
