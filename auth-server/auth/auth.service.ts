import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  //TODO: 비밀번호는 평문으로 노출하지않는다.
  async signIn(inputUsername: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.findOne(inputUsername);
    if (user?.password !== inputPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
