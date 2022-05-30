import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShippingMethod {
  @PrimaryGeneratedColumn()
  id: number;

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
