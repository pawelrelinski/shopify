import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../products/enities/product.entity';
import { CategoryView } from './category-view.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: 'Full category name which we can display as slug',
  })
  name: string;

  @Column({
    comment: 'Format name is name which we can use as link in url',
  })
  formatName: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    comment: 'Icon from heroicons package as svg',
    type: 'text',
  })
  heroIconAsSvg: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  products: Product[];

  @OneToMany(() => CategoryView, (view: CategoryView) => view.category)
  @JoinColumn()
  views: CategoryView[];
}
