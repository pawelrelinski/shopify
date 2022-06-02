import { Module } from '@nestjs/common';
import { ShippingMethodsService } from '@modules/shipping-methods/shipping-methods.service';
import { ShippingMethodsController } from '@modules/shipping-methods/shipping-methods.controller';

@Module({
  controllers: [ShippingMethodsController],
  providers: [ShippingMethodsService],
})
export class ShippingMethodsModule {}
