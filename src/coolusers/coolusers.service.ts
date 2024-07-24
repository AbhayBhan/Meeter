import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CoolusersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(user: Prisma.UserCreateInput) {
    return this.databaseService.user.create({
      data: user,
    });
  }

  async findAll(role?: 'ADMIN' | 'SALES') {
    if (role)
      return this.databaseService.user.findMany({
        where: {
          role,
        },
      });

    return this.databaseService.user.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatedUser: Prisma.UserUpdateInput) {
    return this.databaseService.user.update({
      where : {id},
      data: updatedUser
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: {
        id,
      },
    });
  }
}
