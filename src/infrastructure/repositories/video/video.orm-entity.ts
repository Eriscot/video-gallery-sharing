import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base.orm-entity';
import { UserOrmEntity } from '../user/user.orm-entity';

@Entity()
export class VideoOrmEntity extends BaseEntity {
  @ManyToOne(() => UserOrmEntity, (user) => user.videos)
  author: UserOrmEntity;

  @Column()
  description: string;

  @Column()
  videoLink: string;
}
