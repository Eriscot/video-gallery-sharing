import { PostgreSQLConnectionKey, UserRepository } from '../contants';
import { Connection } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: UserRepository,
    useFactory: async (connection: Connection) =>
      await connection.getRepository(User),
    inject: [PostgreSQLConnectionKey],
  },
];
