import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getMovies(): Movie[];
    getOne(id: string, getData: any): Movie;
    create(createdData: any): void;
    remove(id: string, deletedData: any): boolean;
    patch(id: string, updatedData: any): any;
}
