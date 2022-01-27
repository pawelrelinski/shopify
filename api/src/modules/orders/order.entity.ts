import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/user.entity';
import { OrderProduct } from '../products/order-product.entity';

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

  @ManyToOne(() => User, (user: User) => user.orders, {
    eager: true,
  })
  user: User;
}
