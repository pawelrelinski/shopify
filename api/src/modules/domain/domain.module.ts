import { Module } from '@nestjs/common';
import { DomainController } from './domain.controller';
import { DomainService } from './domain.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Domain } from './entities/domain.entity';
import { Page } from './entities/page.entity';
import { PageView } from './entities/page-view.entity';
import { ConfigModule } from '@nestjs/config';
import { DomainView } from './entities/domain-view.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Domain, DomainView, Page, PageView]),
  ],
  controllers: [DomainController],
  providers: [DomainService],
})
export class DomainModule {}
