import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from '../base.orm-entity';
import { Name } from './name.orm-entity';
import { VideoOrmEntity } from '../video/video.orm-entity';
import { ShareOrmEntity } from '../share-link/share-link.orm-entity';

@Entity()
export class UserOrmEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  username: string;

  @Column(() => Name)
  name: Name;

  @Column()
  password: string;

  @OneToMany(() => VideoOrmEntity, (video) => video.author)
  videos?: VideoOrmEntity[];

  @OneToMany(() => ShareOrmEntity, (share) => share.authorOfShare)
  sharedTo?: ShareOrmEntity[];

  @OneToMany(() => ShareOrmEntity, (share) => share.receiverOfShare)
  sharedFrom?: ShareOrmEntity[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
