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
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var category_entity_1 = require("../../categories/entities/category.entity");
var product_view_entity_1 = require("./product-view.entity");
var product_attributes_entity_1 = require("./product-attributes.entity");
var base_entity_1 = require("../../../core/entities/base-entity");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
            length: 100
        })
    ], Product.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Product.prototype, "shortDescription");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Product.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'decimal',
            precision: 9,
            scale: 2
        })
    ], Product.prototype, "defaultPrice");
    __decorate([
        (0, typeorm_1.Column)()
    ], Product.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'decimal',
            precision: 9,
            scale: 2,
            "default": 0,
            nullable: true
        })
    ], Product.prototype, "promotionPrice");
    __decorate([
        (0, typeorm_1.Column)({
            "default": true
        })
    ], Product.prototype, "isAvailable");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_entity_1.Category; }, function (category) { return category; })
    ], Product.prototype, "category");
    __decorate([
        (0, typeorm_1.Column)()
    ], Product.prototype, "quantity");
    __decorate([
        (0, typeorm_1.Column)()
    ], Product.prototype, "producer");
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp'
        })
    ], Product.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)()
    ], Product.prototype, "expectedDeliveryTime");
    __decorate([
        (0, typeorm_1.Column)()
    ], Product.prototype, "refNumber");
    __decorate([
        (0, typeorm_1.Column)('json')
    ], Product.prototype, "dataSheet");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_attributes_entity_1.ProductAttributes; }, function (attributes) { return attributes.product; }),
        (0, typeorm_1.JoinColumn)()
    ], Product.prototype, "attributes");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_view_entity_1.ProductView; }, function (view) { return view.product; }),
        (0, typeorm_1.JoinColumn)()
    ], Product.prototype, "views");
    __decorate([
        (0, typeorm_1.Column)({
            "default": true
        })
    ], Product.prototype, "isPublished");
    __decorate([
        (0, typeorm_1.Column)('json')
    ], Product.prototype, "shippingMethods");
    __decorate([
        (0, typeorm_1.Column)({
            "default": false
        })
    ], Product.prototype, "isDeleted");
    Product = __decorate([
        (0, typeorm_1.Entity)()
    ], Product);
    return Product;
}(base_entity_1.BaseEntity));
exports.Product = Product;
