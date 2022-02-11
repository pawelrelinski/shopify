import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class CategoryView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @ManyToOne(() => Category, (category: Category) => category.views)
  category: Category;
}
