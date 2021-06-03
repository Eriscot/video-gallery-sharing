import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { BaseEntity } from '../base.entity';

@Entity()
export class Video extends BaseEntity {
  @ManyToOne(() => User, (user) => user.videos)
  author: User;

  @Column()
  description: string;

  @Column()
  videoLink: string;
}
