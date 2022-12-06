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
₩₩₩ 
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
₩₩₩ 
* 권한문제 
- npm install -g @nestjs/cli 시 mkdir명령어에 대한 권한문제 발생
- sudo npm install -g @nestjs/cli로 해결

## Start
1. cd ./[prject-name]   
2. npm run start:dev   
3. Check the website (url : localhost:3000)   
4. We can check 'Hello World'   
