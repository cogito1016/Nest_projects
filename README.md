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

## Start
1. cd ./[prject-name]   
2. npm run start:dev   
3. Check the website (url : localhost:3000)   
4. We can check 'Hello World'   

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

## Controller
- URL을 가져오고 함수 리턴(URL과 함수 매핑)
- @Get (express의 Get라우터)
- @Get("/hello")로 만든 함수는 localhost:3000/hello 에 해당되는 결과를 반환하게된다.   
- 그냥 컨트롤러지뭐..

