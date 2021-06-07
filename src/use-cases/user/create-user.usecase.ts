import { UserRepository } from '../../domain/user/user.repository';
import { CreateUserDto } from '../../infrastructure/REST/user/dto/create-user.dto';
import { User } from '../../domain/user/user.entity';
import { Name } from '../../domain/user/name.entity';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    username,
    firstname,
    lastname,
    email,
    password,
  }: CreateUserDto): Promise<User> {
    const name: Name = new Name(firstname, lastname);

    const user: User = new User(email, username, name, password);

    return this.userRepository.save(user);
  }
}
