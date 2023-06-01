import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Role } from 'roles/roles.enum';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    // TODO: MVP를 위한 목데이터
    User.getInstance(1, 'john', 'changeme', [Role.User], false),
    User.getInstance(2, 'kim', 'himan', [Role.Admin], false),
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
