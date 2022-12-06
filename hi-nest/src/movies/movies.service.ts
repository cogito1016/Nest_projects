import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    getAll() : Movie[]{
        return this.movies;
    }

    getOne(id: string) : Movie {
        return this.movies.find(movie => movie.id === parseInt(id));
    }

    deleteOne(id: string) : boolean {
        let deletedMovies = this.movies.filter((movie)=>(parseInt(id)!==movie.id));
        let result = false;

        if(deletedMovies.length != this.movies.length){
            this.movies = deletedMovies;
            return true;
        }

        return result;
    }

    create(movieData){
        this.movies.push({
            id:this.movies.length+1,
            ...movieData
        })
    }
}
