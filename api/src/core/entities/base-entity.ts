import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: true, nullable: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false, nullable: true })
  isArchived: boolean;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    nullable: true,
  })
  createdOn: Date;

  @Column({ type: 'varchar', length: 300, default: '', nullable: true })
  createdBy: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
    nullable: true,
  })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  lastChangedBy: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment: string | null;

  @Column({ type: 'int', default: 1 })
  version: number;
}
