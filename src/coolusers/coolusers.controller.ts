import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CoolusersService } from './coolusers.service';
import { Prisma } from '@prisma/client';
import { Throttle, SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller('coolusers')
export class CoolusersController {
  constructor(private readonly coolusersService: CoolusersService) {}

  @Post()
  create(@Body() user: Prisma.UserCreateInput) {
    return this.coolusersService.create(user);
  }

  @SkipThrottle({ default: false }) // Rate limits this specific controller
  @Get()
  findAll(@Query("role") role ?: "ADMIN" | "SALES") {
    return this.coolusersService.findAll(role);
  }

  @Throttle({short : {ttl : 1000, limit : 1}})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coolusersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCooluserDto: Prisma.UserUpdateInput) {
    return this.coolusersService.update(+id, updateCooluserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coolusersService.remove(+id);
  }
}
