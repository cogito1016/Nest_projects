import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto{
    @IsString()
    readonly title: string;
    @IsNumber()
    readonly year: number;
    @IsOptional() // 장르는 필수로하고싶지않다는 뜻
    @IsString({each:true})
    readonly genres: string[];
}