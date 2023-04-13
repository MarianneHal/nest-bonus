import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(userData: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        name: userData.name,
        age: userData.age,
        city: userData.city,
        status: userData.status,
        email: userData.email,
      },
    });
  }

  async getUsers() {}

  async deleteUser() {}

  async updateUser() {}
}
