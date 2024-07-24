import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Abcd',
      email: 'abcd@example.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Defg',
      email: 'defg@example.com',
      role: 'SALES',
    },
    {
      id: 3,
      name: 'Abcd',
      email: 'bbcd@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Adbc',
      email: 'abcd3@example.com',
      role: 'ADMIN',
    },
    {
      id: 5,
      name: 'qwew',
      email: 'wqee@example.com',
      role: 'SALES',
    },
  ];

  findAll(role?: 'ADMIN' | 'SALES') {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if(!rolesArray.length){
        throw new NotFoundException("User Role Not Found")
      }
      return rolesArray;
    } else {
      return this.users;
    }
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if(!user) throw new NotFoundException("User Not Found");
    
    return user;
  }

  create(user: CreateUserDto) {
    const lastId = this.users[this.users.length - 1].id;
    const newUser = {
      id: lastId + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: UpdateUserDto,
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
