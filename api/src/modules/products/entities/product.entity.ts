import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../../core/entities/base.entity';
import { ProductView } from './product-view.entity';
import { Exclude } from 'class-transformer';
import { Category } from './category.entity';
import { ProductAttribute } from './product-attribute.entity';

@Entity()
export class Product extends Base {
  @Column()
  name: string;

  @Column({
    type: 'money',
  })
  default_price: number;

  @Column({
    nullable: true,
    type: 'money',
  })
  promotional_price: number;

  @Column({
    nullable: true,
    comment: 'The date the product was received in inventory.',
  })
  received_date: Date;

  @Column({
    nullable: true,
    comment: 'The date the product was last sold.',
  })
  last_sale_date: Date;

  @Column({
    nullable: true,
    comment: 'The date any quantity of the product was last updated.',
  })
  quantity_update_date: Date;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    nullable: true,
  })
  short_description: string;

  @Column({
    nullable: true,
    comment: 'Universal Product Code',
  })
  upc: string;

  @Column({
    nullable: true,
  })
  warehouse_location: string;

  @Column({
    nullable: true,
    comment: 'Default unit is centimeters',
    type: 'decimal',
  })
  height: number;

  @Column({
    nullable: true,
    comment: 'Default unit is centimeters',
    type: 'decimal',
  })
  width: number;

  @Column({
    nullable: true,
    comment: 'Default unit is centimeters',
    type: 'decimal',
  })
  depth: number;

  @Column({
    nullable: true,
    comment: 'Default unit is kilograms',
    type: 'decimal',
  })
  weight: number;

  @Column({
    nullable: true,
    type: 'int',
  })
  quantity: number;

  @Column({
    nullable: true,
    type: 'int',
  })
  available_quantity: number;

  @Column({
    nullable: true,
  })
  image_path: string;

  @Column({
    nullable: true,
    comment: 'A blocked product will not list on a marketplace.',
  })
  is_blocked: boolean;

  @Column({
    default: false,
  })
  @Exclude()
  is_deleted: boolean;

  @OneToMany(() => ProductView, (productView) => productView.product)
  views: ProductView[];

  @ManyToOne(() => Category, (category) => category)
  category: Category;

  @OneToMany(() => ProductAttribute, (attribute) => attribute.product)
  @JoinColumn()
  attributes: ProductAttribute[];

  constructor(partial?: Partial<Product>) {
    super();
    Object.assign(this, partial);
  }
}
