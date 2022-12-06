import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { get } from 'http';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService) {
    }

    @Get()
    getMovies(): Movie[]{
        return this.moviesService.getAll();
    }

    @Get("/:id") //파라미터 ':'콜론 사용
    getOne(@Param("id") id:string, @Body() getData): Movie{ //얻기위해 param데코레이션 사용
        return this.moviesService.getOne(id);
    }

    @Post()
    create(@Body() createdData){
        return this.moviesService.create(createdData);
    }

    @Delete("/:id")
    remove(@Param('id') id:string, @Body() deletedData){
        return this.moviesService.deleteOne(id);
    }

    //put - 모든리소스를 업데이트
    //patch - 리소스의 일부분만 업데이트
    @Patch('/:id')
    patch(@Param('id') id:string, @Body() updatedData){
        return this.moviesService.update(id, updatedData);
    }
}
