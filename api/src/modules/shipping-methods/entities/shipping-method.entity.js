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
exports.ShippingMethod = void 0;
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../core/entities/base-entity");
var ShippingMethod = /** @class */ (function (_super) {
    __extends(ShippingMethod, _super);
    function ShippingMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)()
    ], ShippingMethod.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'decimal',
            precision: 9,
            scale: 2
        })
    ], ShippingMethod.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)()
    ], ShippingMethod.prototype, "maxWeight");
    __decorate([
        (0, typeorm_1.Column)()
    ], ShippingMethod.prototype, "maxDistance");
    __decorate([
        (0, typeorm_1.Column)()
    ], ShippingMethod.prototype, "maxDeliveryTime");
    __decorate([
        (0, typeorm_1.Column)()
    ], ShippingMethod.prototype, "minDeliveryTime");
    ShippingMethod = __decorate([
        (0, typeorm_1.Entity)()
    ], ShippingMethod);
    return ShippingMethod;
}(base_entity_1.BaseEntity));
exports.ShippingMethod = ShippingMethod;
