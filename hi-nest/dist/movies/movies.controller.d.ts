import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getMovies(): Movie[];
    getOne(id: number, getData: any): Movie;
    create(createdData: CreateMovieDto): void;
    remove(id: number, deletedData: any): boolean;
    patch(id: number, updatedData: any): void;
}
