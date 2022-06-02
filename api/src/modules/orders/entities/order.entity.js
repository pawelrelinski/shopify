"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Order = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../users/entities/user.entity");
var order_product_entity_1 = require("../../products/entities/order-product.entity");
var order_status_1 = require("../models/order-status");
var delivery_method_entity_1 = require("./delivery-method.entity");
var base_entity_1 = require("../../../core/entities/base-entity");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp'
        })
    ], Order.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "shippingMethod");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return delivery_method_entity_1.DeliveryMethodEntity; }),
        (0, typeorm_1.JoinTable)()
    ], Order.prototype, "deliveryMethods");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_product_entity_1.OrderProduct; }, function (orderProduct) { return orderProduct.order; })
    ], Order.prototype, "products");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true
        })
    ], Order.prototype, "comments");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "summaryPrice");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": order_status_1.OrderStatus,
            "default": order_status_1.OrderStatus.IN_PROGRESS
        })
    ], Order.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "payment");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.User; }, function (user) { return user.orders; }, {
            eager: true
        })
    ], Order.prototype, "user");
    Order = __decorate([
        (0, typeorm_1.Entity)()
    ], Order);
    return Order;
}(base_entity_1.BaseEntity));
exports.Order = Order;
