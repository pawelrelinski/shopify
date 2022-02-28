import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductView {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @Column({
    default: 1,
  })
  public value: number;

  @ManyToOne(() => Product, (product: Product) => product.views)
  public product: Product;
}
