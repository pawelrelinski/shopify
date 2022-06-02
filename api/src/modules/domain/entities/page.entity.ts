import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Domain } from '@modules/domain/entities/domain.entity';
import { PageView } from '@modules/domain/entities/page-view.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class Page extends BaseEntity {
  @Column()
  public name: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @ManyToOne(() => Domain, (domain: Domain) => domain.pages)
  public domain: Domain;

  @OneToMany(() => PageView, (pageView: PageView) => pageView.page)
  @JoinColumn()
  public views: PageView[];
}
