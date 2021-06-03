import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserRepository } from '../contants';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser({
    firstname,
    lastname,
    password,
  }: CreateUserDto): Promise<User> {
    const user = this.userRepository.create();
    user.setName({ firstname, lastname });
    user.setPassword(password);
    await this.userRepository.save(user);
    return user;
  }
}
