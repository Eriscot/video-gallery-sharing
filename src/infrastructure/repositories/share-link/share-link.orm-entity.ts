import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.orm-entity';
import { UserOrmEntity } from '../user/user.orm-entity';

@Entity()
export class ShareOrmEntity extends BaseEntity {
  @ManyToOne(() => UserOrmEntity, (user) => user.sharedFrom)
  authorOfShare: UserOrmEntity;

  @ManyToOne(() => UserOrmEntity, (user) => user.sharedTo)
  receiverOfShare: UserOrmEntity;

  @Column()
  validTill: Date;
}
