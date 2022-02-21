import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Domain } from './enities/domain.entity';
import { Brackets, getRepository, Repository } from 'typeorm';
import { Page } from './enities/page.entity';
import { PageView } from './enities/page-view.entity';
import { DomainView } from './enities/domain-view.entity';

@Injectable()
export class DomainService {
  constructor(
    @InjectRepository(Domain)
    private readonly domainRepository: Repository<Domain>,
    @InjectRepository(DomainView)
    private readonly domainViewRepository: Repository<DomainView>,
    @InjectRepository(Page)
    private readonly pageRepository: Repository<Page>,
    @InjectRepository(PageView)
    private readonly pageViewRepository: Repository<PageView>,
  ) {}

  public async findAll(): Promise<Domain[]> {
    const qb = getRepository(Domain)
      .createQueryBuilder('domain')
      .innerJoinAndSelect('domain.pages', 'pages')
      .innerJoinAndSelect('pages.views', 'views');

    return await qb.getMany();
  }

  public async addViewToDomain(id: number, request: any): Promise<DomainView> {
    const { headers } = request;
    const domain: Domain = await this.domainRepository.findOne(id);

    const domainView: DomainView = new DomainView();
    domainView.domain = domain;
    domainView.userAgent = headers['user-agent'];
    domainView.origin = headers['origin'];
    domainView.referer = headers['referer'];
    domainView.secChUaPlatform = headers['sec-ch-ua-platform'];
    domainView.secChUa = headers['sec-ch-ua'];
    domainView.secChUaMobile = headers['sec-ch-ua-mobile'];
    domainView.acceptLanguage = headers['accept-language'];

    return await this.domainViewRepository.save(domainView);
  }

  public async getDomainViews(query?: any) {
    const qb = getRepository(Domain)
      .createQueryBuilder('domain')
      .innerJoinAndSelect('domain.views', 'views');

    if ('days' in query) {
      const days = query.days;
      qb.where('views.createdAt > DATE_SUB(CURRENT_DATE, INTERVAL :days DAY)', {
        days,
      });
    }

    qb.orderBy('views.createdAt', 'DESC');
    const { views } = await qb.getOne();

    if ('formatted' in query) {
      const dates: DomainView['createdAt'][] = views.map(
        (view: DomainView) => view.createdAt,
      );
      return dates;
    }

    return views;
  }
}
