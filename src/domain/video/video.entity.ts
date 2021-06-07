import { BaseEntity } from '../base.entity';
import { User } from '../user/user.entity';

export class Video extends BaseEntity {
  author: User;

  description: string;

  videoLink: string;
}
