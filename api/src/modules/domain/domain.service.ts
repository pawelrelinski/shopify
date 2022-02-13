import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Domain } from './enities/domain.entity';
import { getRepository, Repository } from 'typeorm';
import { Page } from './enities/page.entity';
import { PageView } from './enities/page-view.entity';

@Injectable()
export class DomainService {
  constructor(
    @InjectRepository(Domain)
    private readonly domainRepository: Repository<Domain>,
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

    const domain = await qb.getMany();
    return domain;
  }
}
