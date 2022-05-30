import { Injectable } from '@nestjs/common';
import { CreateShippingMethodDto } from './dto/create-shipping-method.dto';
import { UpdateShippingMethodDto } from './dto/update-shipping-method.dto';

@Injectable()
export class ShippingMethodsService {
  create(createShippingMethodDto: CreateShippingMethodDto) {
    return 'This action adds a new shippingMethod';
  }

  findAll() {
    return `This action returns all shippingMethods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shippingMethod`;
  }

  update(id: number, updateShippingMethodDto: UpdateShippingMethodDto) {
    return `This action updates a #${id} shippingMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingMethod`;
  }
}
