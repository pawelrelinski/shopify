import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DomainController } from '@modules/domain/domain.controller';
import { DomainService } from '@modules/domain/domain.service';
import { Domain } from '@modules/domain/entities/domain.entity';
import { Page } from '@modules/domain/entities/page.entity';
import { PageView } from '@modules/domain/entities/page-view.entity';
import { DomainView } from '@modules/domain/entities/domain-view.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Domain, DomainView, Page, PageView]),
  ],
  controllers: [DomainController],
  providers: [DomainService],
})
export class DomainModule {}
