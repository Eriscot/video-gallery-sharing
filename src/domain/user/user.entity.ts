import { BaseEntity } from '../base.entity';
import { Name } from './name.entity';
import { Video } from '../video/video.entity';
import { Share } from '../share-link/share-link.entity';

export class User extends BaseEntity {
  constructor(email: string, username: string, name: Name, password: string) {
    super();
    this.email = email;
    this.username = username;
    this.name = name;
    this.password = password;
  }

  email: string;

  username: string;

  name: Name;

  password: string;

  videos?: Video[];

  sharedTo?: Share[];

  sharedFrom?: Share[];
}
