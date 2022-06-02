import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from '@modules/products/entities/product.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class ProductAttributes extends BaseEntity {
  @Column()
  public name: string;

  @Column()
  public value: string;

  @ManyToOne(() => Product, (product: Product) => product.attributes)
  public product: Product;
}
