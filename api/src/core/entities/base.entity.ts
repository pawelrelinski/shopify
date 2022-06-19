import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export abstract class Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  created_by: string;

  @Column({
    nullable: true,
  })
  updated_by: string;

  @Column({
    nullable: true,
  })
  deleted_by: string;

  @CreateDateColumn()
  created_on: Date;

  @Column({
    nullable: true,
  })
  updated_on: Date;

  @Column({
    nullable: true,
  })
  deleted_on: Date;
}
