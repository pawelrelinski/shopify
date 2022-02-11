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
import { ProductView } from './product-view.entity';

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

  @OneToMany(() => ProductView, (view: ProductView) => view.product)
  @JoinColumn()
  views: ProductView[];

  @Column({
    default: true,
  })
  isPublished: boolean;

  @Column('json')
  shippingMethods: string;

  @Column({
    default: false,
  })
  isDeleted: boolean;
}
