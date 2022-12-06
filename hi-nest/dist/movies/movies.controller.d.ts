export declare class MoviesController {
    getMovies(): string;
    getSearchedData(year: string): string;
    getOne(id: string, getData: any): string;
    create(createdData: any): any;
    remove(id: string, deletedData: any): any;
    patch(id: string, updatedData: any): any;
}
