"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsModule = void 0;
var common_1 = require("@nestjs/common");
var products_controller_1 = require("./products.controller");
var products_service_1 = require("./products.service");
var typeorm_1 = require("@nestjs/typeorm");
var product_entity_1 = require("./entities/product.entity");
var order_product_entity_1 = require("./entities/order-product.entity");
var categories_module_1 = require("../categories/categories.module");
var config_1 = require("@nestjs/config");
var product_view_entity_1 = require("./entities/product-view.entity");
var order_products_service_1 = require("./order-products.service");
var product_attributes_entity_1 = require("./entities/product-attributes.entity");
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule,
                typeorm_1.TypeOrmModule.forFeature([
                    product_entity_1.Product,
                    order_product_entity_1.OrderProduct,
                    product_view_entity_1.ProductView,
                    product_attributes_entity_1.ProductAttributes,
                ]),
                categories_module_1.CategoriesModule,
            ],
            providers: [products_service_1.ProductsService, order_products_service_1.OrderProductsService],
            controllers: [products_controller_1.ProductsController],
            exports: [order_products_service_1.OrderProductsService]
        })
    ], ProductsModule);
    return ProductsModule;
}());
exports.ProductsModule = ProductsModule;
