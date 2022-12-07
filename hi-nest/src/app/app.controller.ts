import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
    @Get()
    helloWorld():String{
        return "Welcome movie App";
    }
}
