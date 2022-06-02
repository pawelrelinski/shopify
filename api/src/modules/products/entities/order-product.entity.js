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
exports.OrderProduct = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("./product.entity");
var order_entity_1 = require("../../orders/entities/order.entity");
var base_entity_1 = require("../../../core/entities/base-entity");
var OrderProduct = /** @class */ (function (_super) {
    __extends(OrderProduct, _super);
    function OrderProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return product_entity_1.Product; }),
        (0, typeorm_1.JoinColumn)()
    ], OrderProduct.prototype, "product");
    __decorate([
        (0, typeorm_1.Column)({
            "default": 0
        })
    ], OrderProduct.prototype, "quantity");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_entity_1.Order; }, function (order) { return order.products; }, {
            eager: true
        })
    ], OrderProduct.prototype, "order");
    OrderProduct = __decorate([
        (0, typeorm_1.Entity)()
    ], OrderProduct);
    return OrderProduct;
}(base_entity_1.BaseEntity));
exports.OrderProduct = OrderProduct;
