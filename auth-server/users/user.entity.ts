import { Role } from 'roles/roles.enum';

export class User {
  roles: Role[] = [];
  userId: number | null = null;
  username: string | null = null;
  password: string | null = null;
  constructor(
    userId: number,
    username: string,
    password: string,
    rolese: Role[]
  ) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.roles = rolese;
  }
  public static getInstance(
    userId: number,
    username: string,
    password: string,
    roles: Role[]
  ): User {
    const user = new User(userId, username, password, roles);
    return user;
  }
}
