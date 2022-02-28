import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { RegistrationStatus } from './dto/registration-status';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { LoginStatus } from './dto/login-status';
import { UserDto } from '../users/dto/user.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  public async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.usersService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  public async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {
    const user: UserDto = await this.usersService.findByEmail(loginUserDto);

    const token = this.createToken(user);

    return {
      email: user.email,
      ...token,
    } as LoginStatus;
  }

  public async validateUser(payload: any): Promise<UserDto> {
    const user: UserDto = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  private createToken({ email }: UserDto): any {
    const userEmail: { email: User['email'] } = { email };
    const accessToken = this.jwtService.sign(userEmail, {
      secret: process.env.SECRET_KEY,
      privateKey: process.env.SECRET_KEY,
      expiresIn: process.env.EXPIRES_IN,
    });
    return {
      accessToken,
    };
  }
}
