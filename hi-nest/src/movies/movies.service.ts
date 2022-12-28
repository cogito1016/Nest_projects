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

    /**
     * Movies의 Movie 중 제일 낮은 year를 가진 영화를 리턴
     * @returns Movie: 제일 낮은 year를 가진 영화
     * @throws NotFoundException: Movie가 없을 경우
     * @throws Error: Movie가 2개 이상일 경우
     * @throws Error: Movie가 0개일 경우
     */
    getMinYearMovie(): Movie{
        if(this.movies.length === 0){
            throw new NotFoundException(`Movie not found.`);
        }
        
        //최소 minYearMovie를 찾기 위해 ES6의 spread operator를 사용
        //for문을 사용하지 않고 reduce를 사용하여 최소값을 찾는다.
        const minYearMovie = this.movies.reduce((minYearMovie, movie) => {
            if(minYearMovie.year > movie.year){
                return movie;
            }
            return minYearMovie;
        }
        , this.movies[0]);

        if(this.movies.filter(movie => movie.year === minYearMovie.year).length > 1){
            throw new Error(`Movie is duplicated.`);
        }

        return minYearMovie;
    }
}
