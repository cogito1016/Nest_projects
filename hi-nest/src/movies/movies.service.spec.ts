import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let testMovie = {
    title: 'Test Movie',
    genres: ['공포','러브'],
    year: 2025
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("getAll", ()=> {
    it("should return an array", ()=>{
      const result = service.getAll();
        expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne",()=>{
    it("should return a movie", ()=>{
        service.create(testMovie);
        const movie = service.getOne(1);
        expect(movie).toBeDefined();
        expect(movie.id).toEqual(1);
    })
  })

  it("should throw 404 error",()=>{
    try{
      service.getOne(999);
    }catch(e){
      expect(e).toBeInstanceOf(NotFoundException);
    }
  })

  describe("deleteOne",()=>{
    it("should delete a movie",()=>{
      service.create(testMovie);
      let result:boolean = service.deleteOne(1);
      expect(result).toBeTruthy();
    })

    it("should throw 404 error",()=>{
      try{
        let result:boolean = service.deleteOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  })

  describe("create",()=>{
    it("should create a movie",()=>{
      //추가하기 전과 후의 Movies개수 차이
    })
  })

  describe("update",()=>{
    it("should update a movie",()=>{
      service.create(testMovie);
      service.update(1,{title:"Updated Test"});
      const movie = service.getOne(1);
      expect(movie.title).toEqual("Updated Test"); 
    });

    it("should throw 404 error",()=>{
      try{
        service.update(1,{title:"Updated Test"});
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  })

  //getMinYearMovie의 테스트코드를 작성하세요.
  describe("getMinYearMovie",()=>{
    it("should return a movie",()=>{
      service.create(testMovie);
      const movie = service.getMinYearMovie();
      expect(movie).toBeDefined();
      expect(movie.year).toEqual(2025);
    })
  })

});
