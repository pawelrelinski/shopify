import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class ShippingMethod extends BaseEntity {
  @Column()
  name: string;

  @Column({
    type: 'decimal',
    precision: 9,
    scale: 2,
  })
  price: number;

  @Column()
  maxWeight: number;

  @Column()
  maxDistance: number;

  @Column()
  maxDeliveryTime: number;

  @Column()
  minDeliveryTime: number;
}
