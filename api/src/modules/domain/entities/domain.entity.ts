import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Page } from '@modules/domain/entities/page.entity';
import { DomainView } from '@modules/domain/entities/domain-view.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class Domain extends BaseEntity {
  @Column('text')
  public description: string;

  @OneToMany(() => Page, (page: Page) => page.domain)
  @JoinColumn()
  public pages: Page[];

  @OneToMany(() => DomainView, (domainView: DomainView) => domainView.domain)
  public views: DomainView[];
}
