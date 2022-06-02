"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdersModule = void 0;
var common_1 = require("@nestjs/common");
var orders_controller_1 = require("./orders.controller");
var orders_service_1 = require("./orders.service");
var typeorm_1 = require("@nestjs/typeorm");
var order_entity_1 = require("./entities/order.entity");
var products_module_1 = require("../products/products.module");
var users_module_1 = require("../users/users.module");
var delivery_method_entity_1 = require("./entities/delivery-method.entity");
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order]),
                products_module_1.ProductsModule,
                users_module_1.UsersModule,
                delivery_method_entity_1.DeliveryMethodEntity,
            ],
            controllers: [orders_controller_1.OrdersController],
            providers: [orders_service_1.OrdersService]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
