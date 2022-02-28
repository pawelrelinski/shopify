import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Page } from './page.entity';
import { DomainView } from './domain-view.entity';

@Entity()
export class Domain {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column('text')
  public description: string;

  @OneToMany(() => Page, (page: Page) => page.domain)
  @JoinColumn()
  public pages: Page[];

  @OneToMany(() => DomainView, (domainView: DomainView) => domainView.domain)
  public views: DomainView[];
}
