import {
  AfterLoad,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';
import { View } from './view.entity';

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
  shortDescription: string;

  @Column('text')
  description: string;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
  })
  defaultPrice: number;

  @Column()
  image: string;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
    default: 0,
  })
  promotionPrice: number;

  @Column({
    default: true,
  })
  isAvailable: boolean;

  @ManyToOne(() => Category, (category: Category) => category)
  category: Category;

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
  expectedDeliveryTime: number;

  @Column()
  refNumber: string;

  @Column('json')
  dataSheet: string;

  @OneToMany(() => View, (view: View) => view.product)
  @JoinColumn()
  views: View[];

  @Column({
    default: true,
  })
  isPublished: boolean;

  @Column('json')
  shippingMethods: string;
}
