import { BaseEntity } from '../base.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Share extends BaseEntity {
  @ManyToOne(() => User, (user) => user.sharedFrom)
  authorOfShare: User;

  @ManyToOne(() => User, (user) => user.sharedTo)
  receiverOfShare: User;

  @Column()
  validTill: Date;
}
