import { Module } from '@nestjs/common';
import { CoolusersService } from './coolusers.service';
import { CoolusersController } from './coolusers.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CoolusersController],
  providers: [CoolusersService],
})
export class CoolusersModule {}
