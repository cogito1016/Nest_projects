import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    getAll() : Movie[]{
        return this.movies;
    }

    getOne(id: number) : Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if(!movie){
            throw new NotFoundException(`Movie with id ${id} not found.`);
        }

        return movie;
    }

    deleteOne(id: number) : boolean {
        this.getOne(id);
        
        let deletedMovies = this.movies.filter((movie)=>(id!==movie.id));
        let result = false;

        if(deletedMovies.length != this.movies.length){
            this.movies = deletedMovies;
            return true;
        }

        return result;
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData
        })
    }

    update(id:number, updatedData: UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updatedData});
    }

    /**
     * Movies의 title 중 검색어를 포함하는 영화를 찾아서 리턴
     * 대소문자 구분없이 검색
     * @param searchTitle
     * @returns Movie[]: 검색된 영화들
     */
    search(searchTitle: string): Movie[]{
        return this.movies.filter(movie => movie.title.toLowerCase().includes(searchTitle.toLowerCase()));
    }
}
