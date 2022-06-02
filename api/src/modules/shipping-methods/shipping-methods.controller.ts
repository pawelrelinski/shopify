import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShippingMethodsService } from '@modules/shipping-methods/shipping-methods.service';
import { CreateShippingMethodDto } from '@modules/shipping-methods/dto/create-shipping-method.dto';
import { UpdateShippingMethodDto } from '@modules/shipping-methods/dto/update-shipping-method.dto';

@Controller('shipping-methods')
export class ShippingMethodsController {
  constructor(
    private readonly shippingMethodsService: ShippingMethodsService,
  ) {}

  @Post()
  create(@Body() createShippingMethodDto: CreateShippingMethodDto) {
    return this.shippingMethodsService.create(createShippingMethodDto);
  }

  @Get()
  findAll() {
    return this.shippingMethodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shippingMethodsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShippingMethodDto: UpdateShippingMethodDto,
  ) {
    return this.shippingMethodsService.update(+id, updateShippingMethodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shippingMethodsService.remove(+id);
  }
}
