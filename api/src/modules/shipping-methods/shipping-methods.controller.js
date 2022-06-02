"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ShippingMethodsController = void 0;
var common_1 = require("@nestjs/common");
var ShippingMethodsController = /** @class */ (function () {
    function ShippingMethodsController(shippingMethodsService) {
        this.shippingMethodsService = shippingMethodsService;
    }
    ShippingMethodsController.prototype.create = function (createShippingMethodDto) {
        return this.shippingMethodsService.create(createShippingMethodDto);
    };
    ShippingMethodsController.prototype.findAll = function () {
        return this.shippingMethodsService.findAll();
    };
    ShippingMethodsController.prototype.findOne = function (id) {
        return this.shippingMethodsService.findOne(+id);
    };
    ShippingMethodsController.prototype.update = function (id, updateShippingMethodDto) {
        return this.shippingMethodsService.update(+id, updateShippingMethodDto);
    };
    ShippingMethodsController.prototype.remove = function (id) {
        return this.shippingMethodsService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ShippingMethodsController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], ShippingMethodsController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ShippingMethodsController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ShippingMethodsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ShippingMethodsController.prototype, "remove");
    ShippingMethodsController = __decorate([
        (0, common_1.Controller)('shipping-methods')
    ], ShippingMethodsController);
    return ShippingMethodsController;
}());
exports.ShippingMethodsController = ShippingMethodsController;
