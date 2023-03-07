import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DevtoolsModule.register({
      http: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
