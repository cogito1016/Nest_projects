# Nest_projects

암온더네스트레벨

---

## Nest

NodeJS위에서 움직이는 프레임워크  
NodeJS > Express(or Fastify) > Nest

1. Ruby - Ruby on Rail
2. Python - Django
3. Java - Spring
4. Javascript - Nest

- 객체지향, 함수형 프로그래밍 가능

---

## Insomnia

- EndPoint Test Tool

---

## Setup

1. npm install  
   https://nodejs.org/en/  
   18.12.1LTS

2. nest install

- sudo npm install -g @nestjs/cli

3. nest project setup

- nset new [project-name]

---

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

- 권한문제

* npm install -g @nestjs/cli 시 mkdir명령어에 대한 권한문제 발생
* sudo npm install -g @nestjs/cli로 해결

### Git Error

#### does not have a commit checked out

- 새로만든 프로젝트를 git add하려는데 이런 에러가 발생한다면?
- 해당 프로젝트 안에 .git파일이 있기때문이다.
- 따라서 삭제해주면 해결

---

## Start

1. cd ./[prject-name]
2. npm run start:dev
3. Check the website (url : localhost:3000)
4. We can check 'Hello World'

---

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

---

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

---

## Generate

- Nest 프로젝트 개발을 위한 커맨드
- Ex) 컨트롤러 생성

1. nest generate controller ( = nest g co )
2. input controller name

- 그러면 벌어지는 일

1. AppModule에 Controller 자동추가
2. src/movies 디렉토리 자동생성
3. src/movies/movies.controller.ts 파일 자동생성

- nest generate service 도 가능
- nest generate module 도 가능 .. 등등 많음 (커맨드에 nest치면 목록 나옴)

- Spec파일?
  테스트를 위한 파일. 일단 보류

---

## Pipe

- 유효성 검사용 파이프
- 미들웨어

1. install

- npm install class-validator class-transformer

2. main.ts > app.useGlobalPipes(new ValidationPipe());
3. DTO > @IsString() , @IsNumber(), @IsString({ each:true })

- each옵션을 준 이유 => String[]이기 때문

### ValidationPipe

#### 옵션

1. WhiteList - true로 설정하면 아무 데코레이터도 없는 어떠한 property의 object를 거릅니다.

- 데코레이터에 해당되지 않는 데이터는 Validator에 도달하지 않는다.

2. forbidNonWhiteListed - true를 하면 리퀘스트 자체를 막음

- Id가 String인 이유는, URL로 보낸 데이터는 전부 String이기 때문

* 근데 Entity는 number니까.. 번환이슈가 생김
* 그럴때 필요한게 transform 옵션

3. trnasform - true를 하면 유저들이 보낸 데이터를 실제 타입으로 변환함

---

## 부분타입

1. install

- npm install @nestjs/mapped-types (타입을 변환시키고 사용할 수 있게하는 패키지)

2. UpdateMovieDto > extends PartialType()
3. 부분타입은 베이스타입이 필요하므로 extends PartialType(CreateMovieDto)

---

## Module

1. nest generate module
2. input name

- 그러면 벌어지는 일

1. Module파일 생성
2. AppModule에 해당 Module파일이 Import 되고, @Module에 적재됨

- AppModule에는 AppController와 AppService가 필요하다. 따라서,

1. nest generate controller
2. app
3. nest generate provider
4. app

---

## Dependency Injection

1. Moudle에 @Module로 Controller와 Service를 지정
2. Controller에 Service를 Constructor에 타입을 지정하여 인수로 받으면
3. Dependency Injection을 통해 자동 주입

---

## Express

- Nest는 Express위에서 돌아간다.
- @Req() req, @Res() res 처럼 직접 Express에 접근 가능
- 그러나 이것은 좋은방법이 아니다.

- Nest는 Express , Fastify 둘 다 동작하기 때문

---

## Test

- Jest  
  자바스크립트 테스트를 위한 NPM 패키지

- Package.json
  테스트를 위한 스트립트가 설정되어 있음

* "test": "jest",
* "test:watch": "jest --watch",
* "test:cov": "jest --coverage",
* "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/ register node_modules/.bin/jest --runInBand",
* "test:e2e": "jest --config ./test/jest-e2e.json"

1. npm run test:cov - 테스트 커버리지 체크
2. npm run test:watch - 테스트

### Unit Test

- 기능(함수) 테스트
- 서비스와 분리

* .spect.ts
  유닛 테스트를 위한 파일

- movies.controller.ts를 테스트하기위해서는 movies.controller.spec.ts가 있어야 함
- describe : 테스트할 파일
- beforeEach : 테스트 실행 전 수행할 로직
- it : 단위테스트 정의
  ex )

```javascript
it("should be defined", () => {
  expect(service).toBeDefined();
});

it("should be 4", () => {
  expect(2 + 2).toEqual(5);
});
```

### End - 2 - End Test

- 전체 시스템 테스트
- command = test:e2e

* beforeEach로 설정된 코드에서, 각 테스트마다 App을 생성하도록 하고있다.

- 이것을 beforeAll로 바꾸면, 앱을 하나만 생성
- 그렇다면 Post테스트에서 생성해줬던 데이터도 그대로 유지.

* /movies/:id 실작동과 테스트시 id의 타입이 다를 수 있다

- e2e코드를 보면

```javascript
app = moduleFixture.createNestApplication();
```

- 위와가은 코드를 볼 수 있는데, 새로운 앱을 생성하는 코드이다.
- 그런데 이때, 어떤 Pipe도 설정하지 않았다.
- 따라서 Pipe설정을 해줘야한다. main.ts에 있는걸 붙어넣어주자.
- 테스팅환결도 실제환경과 동일하게 설정해주어야 한다.
