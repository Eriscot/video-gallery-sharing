import { ConfigService } from '@nestjs/config';
import { createConnection } from 'typeorm';
import { PostgreSQLConnectionKey } from '../contants';
import { User } from '../user/user.entity';
import { Share } from '../share-link/share.entity';
import { Video } from '../video/video.entity';

export const databaseProviders = [
  {
    provide: PostgreSQLConnectionKey,
    useFactory: async (configService: ConfigService) => {
      return createConnection({
        type: 'postgres',
        host: configService.get('POSTGRE_HOST'),
        port: +configService.get<number>('POSTGRE_PORT'),
        username: configService.get('POSTGRE_USERNAME'),
        password: configService.get('POSTGRE_PASSWORD'),
        database: configService.get('POSTGRE_DATABASE'),
        entities: [User, Video, Share],
        synchronize: true,
        logging: true,
      });
    },
    inject: [ConfigService],
  },
];
