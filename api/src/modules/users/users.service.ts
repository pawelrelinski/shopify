import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public findOne(options: FindOneOptions<User>): Promise<UserDto> {
    return this.userRepository.findOne(options);
  }

  public findOneById(id: User['id']): Promise<User> {
    return this.userRepository.findOne(id);
  }

  public async findOneByIdAndUpdate(
    id: User['id'],
    attributeName: string,
    attributeValue: string,
  ): Promise<User> {
    const user: User = await this.userRepository.findOne(id);
    user[attributeName] = attributeValue;
    return this.userRepository.save(user);
  }

  public async findByEmail({
    email,
    password,
  }: LoginUserDto): Promise<UserDto> {
    const user: User = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const areEqual = await bcrypt.compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user as UserDto;
  }

  public async findByPayload(email: User['email']): Promise<UserDto> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  public count(): Promise<number> {
    return this.userRepository.count();
  }

  public async create(userDto: CreateUserDto): Promise<UserDto> {
    const { email, password } = userDto;
    const userInDb = await this.userRepository.findOne({
      where: { email },
    });

    if (userInDb) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const user: User = await this.userRepository.create(userDto);
    return (await this.userRepository.save(user)) as UserDto;
  }
}
