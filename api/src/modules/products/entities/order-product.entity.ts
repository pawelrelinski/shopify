import { Column, Entity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Product } from '@modules/products/entities/product.entity';
import { Order } from '@modules/orders/entities/order.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class OrderProduct extends BaseEntity {
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
