import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];
    
    getAll() : Movie[]{
        return this.movies;
    }

    getOne(id: string) : Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie){
            throw new NotFoundException(`Movie with id ${id} not found.`);
        }

        return movie;
    }

    deleteOne(id: string) : boolean {
        this.getOne(id);
        
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

    update(id:string, updatedData:Movie){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updatedData});
    }
}
