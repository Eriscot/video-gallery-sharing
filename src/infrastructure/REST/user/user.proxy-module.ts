import { DynamicModule, Module } from '@nestjs/common';
import { UserConstants } from './user.constants';
import { DatabaseUserRepository } from '../../repositories/user/database-user.repository';
import { UseCaseProxy } from '../../use_case_proxy/use-case.proxy';
import { FindAllUseCase } from '../../../use-cases/user/find-all.usecase';
import { RepositoriesModule } from '../../repositories/repositories.module';
import { CreateUserUseCase } from '../../../use-cases/user/create-user.usecase';

@Module({
  imports: [RepositoriesModule],
})
export class UserProxyModule {
  static forRoot(): DynamicModule {
    return {
      module: UserProxyModule,
      providers: [
        {
          provide: UserConstants.FIND_ALL,
          useFactory: (databaseUserRepository: DatabaseUserRepository) => {
            return new UseCaseProxy(new FindAllUseCase(databaseUserRepository));
          },
          inject: [DatabaseUserRepository],
        },
        {
          provide: UserConstants.CREATE_USER,
          useFactory: (databaseUserRepository: DatabaseUserRepository) => {
            return new UseCaseProxy(
              new CreateUserUseCase(databaseUserRepository),
            );
          },
          inject: [DatabaseUserRepository],
        },
      ],
      exports: [...Object.values(UserConstants)],
    };
  }
}
