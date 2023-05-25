import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    //TODO: 요청을 DTO처리하여 Validation Check를 해야한다.
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
