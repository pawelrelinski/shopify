import { Column, Entity, ManyToOne } from 'typeorm';
import { Page } from '@modules/domain/entities/page.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class PageView extends BaseEntity {
  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @ManyToOne(() => Page, (page: Page) => page.views)
  public page: Page;
}
