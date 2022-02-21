import { Controller, Get, HttpStatus, Post, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DomainService } from './domain.service';
import { Domain } from './enities/domain.entity';

@ApiTags('domain')
@Controller('domain')
export class DomainController {
  constructor(private domainService: DomainService) {}

  @ApiOperation({ summary: 'Get all pages' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Return all pages.' })
  @Get()
  public async findAll(): Promise<{}> {
    const domains: Domain[] = await this.domainService.findAll();
    return { domains };
  }

  @ApiOperation({ summary: 'Add view to domain views' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'View has been added succesfully.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post()
  public async addViewToDomain(@Req() request) {
    const view = await this.domainService.addViewToDomain(1, request);
    return { view };
  }

  @ApiOperation({ summary: "Get domain's views from last days" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Return all domain's views from last days",
  })
  @Get('views')
  public async getDomainViews(@Query() query) {
    return await this.domainService.getDomainViews(query);
  }
}
