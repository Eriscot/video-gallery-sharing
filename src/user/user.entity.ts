import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from '../base.entity';
import { Name } from './name.entity';
import { Video } from '../video/video.entity';
import { Share } from '../share-link/share.entity';

@Entity()
export class User extends BaseEntity {
  @Column((type) => Name)
  name: Name;

  @Column({
    select: false,
  })
  password: string;

  @OneToMany(() => Video, (video) => video.author)
  videos: Video[];

  @OneToMany(() => Share, (share) => share.authorOfShare)
  sharedTo: Share[];

  @OneToMany(() => Share, (share) => share.receiverOfShare)
  sharedFrom: Share[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  setName(name: Name) {
    console.log(this);
    this.name = {} as Name;
    this.name.firstname = name.firstname;
    this.name.lastname = name.lastname;
  }

  changeName(name: Name) {
    this.name.firstname = name.firstname || this.name.firstname;
    this.name.lastname = name.lastname || this.name.lastname;
  }

  setPassword(password: string) {
    this.password = password;
  }

  changePassword(password: string) {
    this.password = password || this.password;
  }
}
