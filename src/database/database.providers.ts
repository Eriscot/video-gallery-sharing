import { ConfigModule, ConfigService } from '@nestjs/config';
import { createConnection } from 'typeorm';

export const PostgreSQLConnectionKey = Symbol('PostgreSQLConnectionKey');

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
        entities: [],
      });
    },
    inject: [ConfigService],
  },
];
