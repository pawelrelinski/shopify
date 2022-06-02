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
exports.Category = void 0;
var typeorm_1 = require("typeorm");
var product_entity_1 = require("../../products/entities/product.entity");
var category_view_entity_1 = require("./category-view.entity");
var base_entity_1 = require("../../../core/entities/base-entity");
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Full category name which we can display as slug'
        })
    ], Category.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Format name is name which we can use as link in url'
        })
    ], Category.prototype, "formatName");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: true,
            type: 'text'
        })
    ], Category.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Icon from heroicons package as svg',
            type: 'text'
        })
    ], Category.prototype, "heroIconAsSvg");
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp'
        })
    ], Category.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_entity_1.Product; }, function (product) { return product.category; })
    ], Category.prototype, "products");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return category_view_entity_1.CategoryView; }, function (view) { return view.category; }),
        (0, typeorm_1.JoinColumn)()
    ], Category.prototype, "views");
    Category = __decorate([
        (0, typeorm_1.Entity)()
    ], Category);
    return Category;
}(base_entity_1.BaseEntity));
exports.Category = Category;
