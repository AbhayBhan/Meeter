import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { CoolusersModule } from './coolusers/coolusers.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [UsersModule, DatabaseModule, CoolusersModule, ThrottlerModule.forRoot([{
    name: 'short',
    ttl: 1000,
    limit: 3
  },{
    name: 'long',
    ttl: 60000,
    limit: 100
  }]), MyLoggerModule],
  controllers: [AppController],
  providers: [AppService, {
    provide : APP_GUARD,
    useClass : ThrottlerGuard,
  }],
})
export class AppModule {}
