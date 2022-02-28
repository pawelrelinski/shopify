import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { Order } from '../../orders/entities/order.entity';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToOne(() => Product)
  @JoinColumn()
  public product: Product;

  @Column({
    default: 0,
  })
  public quantity: number;

  @ManyToOne(() => Order, (order: Order) => order.products, {
    eager: true,
  })
  public order: Order;
}
