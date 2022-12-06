import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getMovies(): string{
        return "Movies Movies~";
    }

}
