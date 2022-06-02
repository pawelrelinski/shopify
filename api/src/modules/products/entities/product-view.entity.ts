import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from '@modules/products/entities/product.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class ProductView extends BaseEntity {
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
