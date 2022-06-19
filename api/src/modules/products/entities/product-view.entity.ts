import { Base } from '../../../core/entities/base.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity('product_view')
export class ProductView extends Base {
  @ManyToOne(() => Product, (product) => product.views)
  product: Product;
}
