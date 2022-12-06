import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//아래의 형태는 데코레이터.
//Nest는 데코레이터와 함께한다.
//데코레이터는 클래스에 함수기능을 추가한다.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
//AppModule은 속이 비어있는형태
//본체는 위의 데코레이터에 있다.
export class AppModule {}
