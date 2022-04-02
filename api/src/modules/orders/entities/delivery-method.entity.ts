import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DeliveryMethodEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
