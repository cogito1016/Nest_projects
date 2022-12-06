import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dto";


export class UpdateMovieDto extends PartialType(CreateMovieDto){}

//위랑 동일
// export class UpdateMovieDto{
//     @IsString()
//     readonly title?: string; // ? - 필수는 아니라는 뜻 왜 ? title 또는 year만 수정하고 싶을 수 있으니까.
//     @IsNumber()
//     readonly year?: number;
//     @IsString({each:true})
//     readonly genres?: string[];
// }