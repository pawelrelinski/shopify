import { Controller, Get, HttpStatus, Post, Query, Req } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DomainService } from './domain.service';
import { Domain } from './entities/domain.entity';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@ApiTags('domain')
@Controller('domain')
export class DomainController {
  constructor(private domainService: DomainService) {}

  @ApiOperation({ summary: 'Get all pages' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Return all pages.',
    isArray: true,
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Get()
  @Roles(Role.ADMIN)
  public async findAll(): Promise<{}> {
    const domains: Domain[] = await this.domainService.findAll();
    return { domains };
  }

  @ApiOperation({ summary: 'Add view to domain views' })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'View has been added successfully.',
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Post()
  @Roles(Role.ADMIN)
  public async addViewToDomain(@Req() request) {
    const view = await this.domainService.addViewToDomain(1, request);
    return { view };
  }

  @ApiOperation({ summary: "Get domain's views from last days" })
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: "Return all domain's views from last days",
  })
  @ApiForbiddenResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Forbidden resource.',
  })
  @Get('views')
  @Roles(Role.ADMIN)
  public async getDomainViews(@Query() query) {
    return await this.domainService.getDomainViews(query);
  }
}
