import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';

@Controller('movies')
export class MoviesController {

    @Get()
    getMovies(): string{
        return "Movies Movies~";
    }

    @Get("/search")
    getSearchedData(@Query('year') year:string){
        return `Search Result : ${year}`;
    }

    @Get("/:id") //파라미터 ':'콜론 사용
    getOne(@Param("id") id:string, @Body() getData): string{ //얻기위해 param데코레이션 사용
        return getData;
    }

    @Post()
    create(@Body() createdData){
        return createdData;
    }

    @Delete("/:id")
    remove(@Param('id') id:string, @Body() deletedData){
        return {
            deletedMovieId: id,
            ...deletedData
        };
    }

    //put - 모든리소스를 업데이트
    //patch - 리소스의 일부분만 업데이트
    @Patch('/:id')
    patch(@Param('id') id:string, @Body() updatedData){
        return {
            updatedMovieId: id,
            ...updatedData
        }
    }
}
