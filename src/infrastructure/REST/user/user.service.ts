import { Inject, Injectable } from '@nestjs/common';
import { UserConstants } from './user.constants';
import { UseCaseProxy } from '../../use_case_proxy/use-case.proxy';
import { FindAllUseCase } from '../../../use-cases/user/find-all.usecase';
import { User } from '../../../domain/user/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUseCase } from '../../../use-cases/user/create-user.usecase';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserConstants.FIND_ALL)
    private readonly findAllUsersProxy: UseCaseProxy<FindAllUseCase>,
    @Inject(UserConstants.CREATE_USER)
    private readonly createUserProxy: UseCaseProxy<CreateUserUseCase>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.findAllUsersProxy.getInstance().execute();
  }

  async create(dto: CreateUserDto): Promise<User> {
    return this.createUserProxy.getInstance().execute(dto);
  }
}
