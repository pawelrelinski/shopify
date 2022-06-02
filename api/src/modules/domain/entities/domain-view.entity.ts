import { Column, Entity, ManyToOne } from 'typeorm';
import { Domain } from '@modules/domain/entities/domain.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class DomainView extends BaseEntity {
  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @Column({
    comment: 'Header data about user-agent',
    nullable: true,
  })
  public userAgent: string;

  @Column({
    comment: 'Header data about origin',
    nullable: true,
  })
  public origin: string;

  @Column({
    comment: 'Header data about referer',
    nullable: true,
  })
  public referer: string;

  @Column({
    comment: 'Header data about sec-ch-ua-platform',
    nullable: true,
  })
  public secChUaPlatform: string;

  @Column({
    comment: 'Header data about sec-ch-ua',
    nullable: true,
  })
  public secChUa: string;

  @Column({
    comment: 'Header data about sec-ch-ua-mobile',
    nullable: true,
  })
  public secChUaMobile: string;

  @Column({
    comment: 'Header data about accept-language',
    nullable: true,
  })
  public acceptLanguage: string;

  @ManyToOne(() => Domain, (domain: Domain) => domain.views)
  public domain: Domain;
}
