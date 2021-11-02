import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// create a new TypeORM entity
@Entity({ name: 'account' })
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  birth: string;
}
