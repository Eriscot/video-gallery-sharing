import { BaseEntity } from '../base.entity';
import { User } from '../user/user.entity';

export class Share extends BaseEntity {
  authorOfShare: User;

  receiverOfShare: User;

  validTill: Date;
}
