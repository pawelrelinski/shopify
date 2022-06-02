import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class DeliveryMethodEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
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
