import { Module } from '@nestjs/common';
import { UserProxyModule } from './user.proxy-module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [UserProxyModule.forRoot()],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
