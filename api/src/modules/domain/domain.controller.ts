import { Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DomainService } from './domain.service';
import { Domain } from './enities/domain.entity';

@ApiTags('domain')
@Controller('domain')
export class DomainController {
  constructor(private domainService: DomainService) {}

  @ApiOperation({ summary: 'Get all pages' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all pages' })
  @Get()
  public async findAll(): Promise<{}> {
    const domains: Domain[] = await this.domainService.findAll();
    return { domains };
  }
}
