import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Page } from './page.entity';

@Entity()
export class Domain {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;

  @OneToMany(() => Page, (page: Page) => page.domain)
  @JoinColumn()
  pages: Page[];
}
