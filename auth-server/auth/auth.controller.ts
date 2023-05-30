import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'decorator/public.decorator';
import { Roles } from 'decorator/roles.decorator';
import { Role } from 'roles/roles.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public() //access_key가 없어도 호출되는 퍼블릭 API
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    // TODO: 요청을 DTO처리하여 Validation Check를 해야한다.
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Roles(Role.Admin) //ADMIN이 아니라면 forbidden 예외 발생
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
