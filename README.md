# Nest_projects
암온더네스트레벨

- - -
## Nest   
NodeJS위에서 움직이는 프레임워크   
NodeJS > Express(or Fastify) > Nest   
   
1. Ruby - Ruby on Rail
2. Python - Django
3. Java - Spring
4. Javascript - Nest
   
* 객체지향, 함수형 프로그래밍 가능
   
- - -
## Insomnia
* EndPoint Test Tool

- - - 
## Setup
1. npm install   
https://nodejs.org/en/   
18.12.1LTS   
   
2. nest install   
* sudo npm install -g @nestjs/cli   

3. nest project setup   
* nset new [project-name]   

- - - 
### Nest Install Error   
```  
npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules/@nestjs
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@nestjs'
npm ERR!  [Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@nestjs'] {
npm ERR!   errno: -13,
npm ERR!   code: 'EACCES',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: '/usr/local/lib/node_modules/@nestjs'
npm ERR! }
```   

* 권한문제 
- npm install -g @nestjs/cli 시 mkdir명령어에 대한 권한문제 발생
- sudo npm install -g @nestjs/cli로 해결

- - - 
## Start
1. cd ./[prject-name]   
2. npm run start:dev   
3. Check the website (url : localhost:3000)   
4. We can check 'Hello World'   

- - - 
## Check Default File
1. main.ts
2. app.module.ts 
- @module이라는 데코레이터를 볼 수 있다.   
- 루트 모듈
3. app.controller.ts   
- @get이라는 데코레이터를 볼 수 있다.
- appService의 getHello()를 리턴한다. 
4. app.service.ts   
- @Injectable이라는 데코레이터를 볼 수 있다.   
- 문자열 "Hello World"를 출력한다.   

* 데코레이터 = Spring의 어노테이션 기능을 하는 것 같다.

* 모듈이란 ? 
- 한가지 역할을 하는 앱, 컴포넌트 요런 느낌

- - - 
## App Module
- 루트 모듈
- 어플리케이션 접근점
- AppController, AppProvider를 가지고있어야 함

## Controller
- URL을 가져오고 함수 리턴(URL과 함수 매핑)
- @Get (express의 Get라우터)
- @Get("/hello")로 만든 함수는 localhost:3000/hello 에 해당되는 결과를 반환하게된다.   
- Parameter 사용
1. @Get(":id")
2. getOne(@Param('id') id): type
3. { return `id is ${id}` }
- QueryString 사용
* getOne(@Query('id') id): type

## Service
- Controller <-> 비지니스 로직 구분을 위한 단계
- 실질적인 Function, 비지니스로직
* Single-Responsibility Principle을 따르자

- - - 
## Generate 
- Nest 프로젝트 개발을 위한 커맨드 
- Ex) 컨트롤러 생성
1. nest generate controller ( = nest g co )
2. input controller name
* 그러면 벌어지는 일
1. AppModule에 Controller 자동추가
2. src/movies 디렉토리 자동생성
3. src/movies/movies.controller.ts 파일 자동생성
* nest generate service 도 가능
* nest generate module 도 가능 .. 등등 많음 (커맨드에 nest치면 목록 나옴)

* Spec파일?
테스트를 위한 파일. 일단 보류   

- - - 
## Pipe
- 유효성 검사용 파이프
- 미들웨어

1. install
- npm install class-validator class-transformer 
2. main.ts > app.useGlobalPipes(new ValidationPipe());
3. DTO > @IsString() , @IsNumber(), @IsString({ each:true })
* each옵션을 준 이유 => String[]이기 때문

### ValidationPipe
#### 옵션
1. WhiteList - true로 설정하면 아무 데코레이터도 없는 어떠한 property의 object를 거릅니다.
* 데코레이터에 해당되지 않는 데이터는 Validator에 도달하지 않는다.
2. forbidNonWhiteListed - true를 하면 리퀘스트 자체를 막음

* Id가 String인 이유는, URL로 보낸 데이터는 전부 String이기 때문
- 근데 Entity는 number니까.. 번환이슈가 생김
- 그럴때 필요한게 transform 옵션
3. trnasform - true를 하면 유저들이 보낸 데이터를 실제 타입으로 변환함

- - - 
## 부분타입
1. install
- npm install @nestjs/mapped-types (타입을 변환시키고 사용할 수 있게하는 패키지)
2. UpdateMovieDto > extends PartialType()
3. 부분타입은 베이스타입이 필요하므로 extends PartialType(CreateMovieDto)

- - - 
## Module
1. nest generate module
2. input name
* 그러면 벌어지는 일
1. Module파일 생성
2. AppModule에 해당 Module파일이 Import 되고, @Module에 적재됨

* AppModule에는 AppController와 AppService가 필요하다. 따라서,
1. nest generate controller
2. app
3. nest generate provider
4. app


- - - 
## Dependency Injection
 1. Moudle에 @Module로 Controller와 Service를 지정
 2. Controller에 Service를 Constructor에 타입을 지정하여 인수로 받으면 
 3. Dependency Injection을 통해 자동 주입