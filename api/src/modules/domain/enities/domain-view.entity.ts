import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Domain } from './domain.entity';

@Entity()
export class DomainView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: string;

  @Column({
    comment: 'Header data about user-agent',
    nullable: true,
  })
  userAgent: string;

  @Column({
    comment: 'Header data about origin',
    nullable: true,
  })
  origin: string;

  @Column({
    comment: 'Header data about referer',
    nullable: true,
  })
  referer: string;

  @Column({
    comment: 'Header data about sec-ch-ua-platform',
    nullable: true,
  })
  secChUaPlatform: string;

  @Column({
    comment: 'Header data about sec-ch-ua',
    nullable: true,
  })
  secChUa: string;

  @Column({
    comment: 'Header data about sec-ch-ua-mobile',
    nullable: true,
  })
  secChUaMobile: string;

  @Column({
    comment: 'Header data about accept-language',
    nullable: true,
  })
  acceptLanguage: string;

  @ManyToOne(() => Domain, (domain: Domain) => domain.views)
  domain: Domain;
}
