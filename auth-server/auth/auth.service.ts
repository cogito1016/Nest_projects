import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  //TODO: 비밀번호는 평문으로 노출하지않는다.
  async signIn(inputUsername: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.findOne(inputUsername);
    if (user?.password !== inputPassword) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    //TODO: JWT토큰을 생성하고 반환하는걸로 전환해야 함
    return result;
  }
}
