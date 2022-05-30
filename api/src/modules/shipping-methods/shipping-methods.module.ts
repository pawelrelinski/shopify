import { Module } from '@nestjs/common';
import { ShippingMethodsService } from './shipping-methods.service';
import { ShippingMethodsController } from './shipping-methods.controller';

@Module({
  controllers: [ShippingMethodsController],
  providers: [ShippingMethodsService]
})
export class ShippingMethodsModule {}
