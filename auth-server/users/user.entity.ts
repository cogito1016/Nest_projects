import { Role } from 'roles/roles.enum';

export class User {
  roles: Role[] = [];
  userId: number | null = null;
  username: string | null = null;
  password: string | null = null;
  isAdmin: boolean;
  constructor(
    userId: number,
    username: string,
    password: string,
    rolese: Role[],
    isAdmin: boolean
  ) {
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.roles = rolese;
    this.isAdmin = isAdmin;
  }
  public static getInstance(
    userId: number,
    username: string,
    password: string,
    roles: Role[],
    isAdmin: boolean
  ): User {
    const user = new User(userId, username, password, roles, isAdmin);
    return user;
  }
}
