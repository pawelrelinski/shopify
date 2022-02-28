import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { OrderProduct } from '../../products/entities/order-product.entity';
import { OrderStatus } from '../models/order-status';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @Column()
  public shippingMethod: string;

  @OneToMany(
    () => OrderProduct,
    (orderProduct: OrderProduct) => orderProduct.order,
  )
  public products: OrderProduct[];

  @Column({
    nullable: true,
  })
  public comments?: string;

  @Column()
  public summaryPrice: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.IN_PROGRESS,
  })
  public status: OrderStatus;

  @Column()
  public payment: string;

  @ManyToOne(() => User, (user: User) => user.orders, {
    eager: true,
  })
  public user: User;
}
