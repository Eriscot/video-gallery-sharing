import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserOrmEntity } from '../../repositories/user/user.orm-entity';
import { VideoOrmEntity } from '../../repositories/video/video.orm-entity';
import { ShareOrmEntity } from '../../repositories/share-link/share-link.orm-entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRE_HOST'),
        port: +configService.get<number>('POSTGRE_PORT'),
        username: configService.get('POSTGRE_USERNAME'),
        password: configService.get('POSTGRE_PASSWORD'),
        database: configService.get('POSTGRE_DATABASE'),
        entities: [UserOrmEntity, VideoOrmEntity, ShareOrmEntity],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
