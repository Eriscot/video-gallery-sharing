import { Column } from 'typeorm';

export class Name {
  @Column()
  firstname: string;

  @Column()
  lastname: string;
}
