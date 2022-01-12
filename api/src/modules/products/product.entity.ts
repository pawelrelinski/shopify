import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
  })
  defaultPrice: number;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
  })
  promotionPrice: number;

  @Column()
  isAvailable: boolean;

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  producer: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @Column()
  refNumber: string;

  @Column()
  dataSheet: string;

  @Column({
    type: 'int',
    default: 0,
  })
  views: number;

  @Column()
  isPublished: boolean;
}
