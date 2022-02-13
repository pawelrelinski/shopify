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
  id: number;

  @Column()
  name: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @ManyToOne(() => Domain, (domain: Domain) => domain.pages)
  domain: Domain;

  @OneToMany(() => PageView, (pageView: PageView) => pageView.page)
  @JoinColumn()
  views: PageView[];
}
