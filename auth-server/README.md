# Auth

## 구축

### 기본

1. nest g mo ./auth-server/auth
2. nest g controller ./auth-server/auth
3. nest g service ./auth-server/auth
4. nest g module users
5. nest g service users

### JWT 라이브러리 설치

1. npm install @nestjs/jwt

#### /auth/login

- 요청예시  
  {{url}}/auth/login
- 응답예시

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTY4NTIwMjgxMSwiZXhwIjoxNjg1MjAyODcxfQ.Zr6MMvzmicQ9-E2Jh1KH2vWo9R7Yv640p2J3WVUjPuQ"
}
```

#### /auth/profile

- 요청예시 {{url}}/auth/profile
- 응답예시

```json
{
  "sub": 1,
  "username": "john",
  "iat": 1685275168,
  "exp": 1685275228
}
```
