import { Column, Entity, ManyToOne } from 'typeorm';
import { Category } from '@modules/categories/entities/category.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class CategoryView extends BaseEntity {
  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @ManyToOne(() => Category, (category: Category) => category.views)
  public category: Category;
}
