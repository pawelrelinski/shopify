import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import { CategoryView } from './category-view.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    comment: 'Full category name which we can display as slug',
  })
  public name: string;

  @Column({
    comment: 'Format name is name which we can use as link in url',
  })
  public formatName: string;

  @Column({
    nullable: true,
    type: 'text',
  })
  public description: string;

  @Column({
    comment: 'Icon from heroicons package as svg',
    type: 'text',
  })
  public heroIconAsSvg: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @OneToMany(() => Product, (product: Product) => product.category)
  public products: Product[];

  @OneToMany(() => CategoryView, (view: CategoryView) => view.category)
  @JoinColumn()
  public views: CategoryView[];
}
