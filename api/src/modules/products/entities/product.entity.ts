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
import { Category } from '../../categories/entities/category.entity';
import { ProductView } from './product-view.entity';
import { ProductAttributes } from './product-attributes.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  public name: string;

  @Column('text')
  public shortDescription: string;

  @Column('text')
  public description: string;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
  })
  public defaultPrice: number;

  @Column()
  public image: string;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
    default: 0,
  })
  public promotionPrice: number;

  @Column({
    default: true,
  })
  public isAvailable: boolean;

  @ManyToOne(() => Category, (category: Category) => category)
  public category: Category;

  @Column()
  public quantity: number;

  @Column()
  public producer: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @Column()
  public expectedDeliveryTime: number;

  @Column()
  public refNumber: string;

  @Column('json')
  public dataSheet: string;

  @OneToMany(
    () => ProductAttributes,
    (attributes: ProductAttributes) => attributes.product,
  )
  @JoinColumn()
  public attributes: ProductAttributes[];

  @OneToMany(() => ProductView, (view: ProductView) => view.product)
  @JoinColumn()
  public views: ProductView[];

  @Column({
    default: true,
  })
  public isPublished: boolean;

  @Column('json')
  public shippingMethods: string;

  @Column({
    default: false,
  })
  public isDeleted: boolean;
}
