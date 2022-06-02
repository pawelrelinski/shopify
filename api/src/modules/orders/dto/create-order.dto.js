"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateOrderDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var order_product_entity_1 = require("../../products/entities/order-product.entity");
var user_entity_1 = require("../../users/entities/user.entity");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var CreateOrderDto = /** @class */ (function () {
    function CreateOrderDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(3),
        (0, class_validator_1.MaxLength)(20)
    ], CreateOrderDto.prototype, "shippingMethod");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: order_product_entity_1.OrderProduct,
            isArray: true
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.ArrayMinSize)(1),
        (0, class_validator_1.ArrayMaxSize)(30),
        (0, class_transformer_1.Type)(function () { return order_product_entity_1.OrderProduct; })
    ], CreateOrderDto.prototype, "products");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], CreateOrderDto.prototype, "comments");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: user_entity_1.User['id']
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)()
    ], CreateOrderDto.prototype, "user");
    return CreateOrderDto;
}());
exports.CreateOrderDto = CreateOrderDto;
