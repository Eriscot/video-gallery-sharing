import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from './user/user.orm-entity';
import { VideoOrmEntity } from './video/video.orm-entity';
import { ShareOrmEntity } from './share-link/share-link.orm-entity';
import { DatabaseUserRepository } from './user/database-user.repository';
import { DatabaseVideoRepository } from './video/database-video.repository';
import { DatabaseShareRepository } from './share-link/database-share.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserOrmEntity, VideoOrmEntity, ShareOrmEntity]),
  ],
  providers: [
    DatabaseUserRepository,
    DatabaseVideoRepository,
    DatabaseShareRepository,
  ],
  exports: [
    DatabaseUserRepository,
    DatabaseVideoRepository,
    DatabaseShareRepository,
  ],
})
export class RepositoriesModule {}
