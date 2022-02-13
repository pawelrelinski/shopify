import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { OrderProduct } from '../products/enities/order-product.entity';
import { OrderStatus } from './models/order-status';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @Column()
  shippingMethod: string;

  @OneToMany(
    () => OrderProduct,
    (orderProduct: OrderProduct) => orderProduct.order,
  )
  products: OrderProduct[];

  @Column({
    nullable: true,
  })
  comments?: string;

  @Column()
  summaryPrice: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.IN_PROGRESS,
  })
  status: OrderStatus;

  @Column()
  payment: string;

  @ManyToOne(() => User, (user: User) => user.orders, {
    eager: true,
  })
  user: User;
}
