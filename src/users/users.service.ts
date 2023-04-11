import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  private users: any = [];

  async createUser(userData: CreateUserDto) {
    const id = this.users.slice(this.users.length - 1)[0]?.id + 1 || 1;
    this.users.push({ ...userData, id });
    return this.users;
  }

  async getUsers() {
    return this.users;
  }

  async deleteUser(userId: number) {
    const i = this.users.findIndex((user) => user.id === userId);
    this.users.splice(i, 1);
    return this.users;
  }

  async updateUser(userId: number, userData) {
    const i = this.users.findIndex((user) => user.id === userId);
    this.users.splice(i, 1, userData);
    return this.users;
  }
}
