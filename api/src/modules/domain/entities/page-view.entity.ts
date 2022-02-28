import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Page } from './page.entity';

@Entity()
export class PageView {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @ManyToOne(() => Page, (page: Page) => page.views)
  public page: Page;
}
