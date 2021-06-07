import { UserRepository } from '../../../domain/user/user.repository';
import { User } from '../../../domain/user/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserOrmEntity } from './user.orm-entity';

@Injectable()
export class DatabaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly userEntityRepository: Repository<UserOrmEntity>,
  ) {}

  find(query: any): Promise<User> {
    return Promise.resolve(undefined);
  }

  async findAll(): Promise<User[]> {
    const users: UserOrmEntity[] = await this.userEntityRepository.find();
    return users.map(this.toEntity);
  }

  findOne(query: any): Promise<User> {
    return Promise.resolve(undefined);
  }

  async save(entity: User): Promise<User> {
    const userOrmEntity: UserOrmEntity = this.userEntityRepository.create();
    Object.entries(entity).forEach(
      ([key, value]) => (userOrmEntity[key] = value),
    );
    return this.toEntity(await this.userEntityRepository.save(userOrmEntity));
  }

  toEntity({ email, username, name, password, id }: UserOrmEntity): User {
    const user: User = new User(email, username, name, password);
    user.id = id;
    return user;
  }
}
