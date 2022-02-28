import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class CategoryView {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @ManyToOne(() => Category, (category: Category) => category.views)
  public category: Category;
}
