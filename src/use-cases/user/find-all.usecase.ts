import { UserRepository } from '../../domain/user/user.repository';
import { User } from '../../domain/user/user.entity';

export class FindAllUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
