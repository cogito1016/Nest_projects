import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getMovies(): string{
        return "Movies Movies~";
    }

    @Get("/:id") //파라미터 ':'콜론 사용
    getOne(@Param("id") id:string): string{ //얻기위해 param데코레이션 사용
        return `Movie Id : ${id}`;
    }

    @Post()
    create(){
        return "This will create a movie";
    }

    @Delete("/:id")
    remove(@Param('id') id:string){
        return "This will remove a movie ( id :"+id;
    }

    //put - 모든리소스를 업데이트
    //patch - 리소스의 일부분만 업데이트
    @Patch('/:id')
    patch(@Param('id') id:string){
        return `Patch the movie id is ${id}`;
    }
}
