import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { RestModule } from './REST/rest.module';

@Module({
  imports: [DatabaseModule, RestModule],
})
export class AppModule {}
