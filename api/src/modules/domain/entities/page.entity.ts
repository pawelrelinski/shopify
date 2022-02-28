import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Domain } from './domain.entity';
import { PageView } from './page-view.entity';

@Entity()
export class Page {
  @PrimaryGeneratedColumn()
  public id: number;

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
