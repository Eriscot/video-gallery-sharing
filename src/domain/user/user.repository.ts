import { User } from './user.entity';
import { BaseRepository } from '../base.repository';

export interface UserRepository extends BaseRepository<User> {}
