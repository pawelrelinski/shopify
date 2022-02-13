import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Page } from './page.entity';

@Entity()
export class PageView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @ManyToOne(() => Page, (page: Page) => page.views)
  page: Page;
}
