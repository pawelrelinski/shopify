import { Base } from '../../../core/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Category extends Base {
  @Column({
    comment: 'Full category name which we can display as slug',
  })
  name: string;

  @Column({
    comment: 'Format name is name which we can use as link in url',
  })
  format_name: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
