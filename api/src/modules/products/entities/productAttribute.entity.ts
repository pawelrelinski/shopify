import { Base } from '../../../core/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity('product_attribute')
export class ProductAttribute extends Base {
  @Column()
  name: string;

  @Column()
  value: string;

  @ManyToOne(() => Product, (product) => product.attributes)
  product: Product;
}
