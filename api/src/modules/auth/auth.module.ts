import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      secretOrPrivateKey: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: process.env.EXPIRES_IN,
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
  controllers: [AuthController],
})
export class AuthModule {}
