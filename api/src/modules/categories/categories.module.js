"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CategoriesModule = void 0;
var common_1 = require("@nestjs/common");
var categories_service_1 = require("./categories.service");
var categories_controller_1 = require("./categories.controller");
var typeorm_1 = require("@nestjs/typeorm");
var category_entity_1 = require("./entities/category.entity");
var category_view_entity_1 = require("./entities/category-view.entity");
var category_view_service_1 = require("./category-view.service");
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, category_view_entity_1.CategoryView])],
            providers: [categories_service_1.CategoriesService, category_view_service_1.CategoryViewService],
            controllers: [categories_controller_1.CategoriesController],
            exports: [categories_service_1.CategoriesService, category_view_service_1.CategoryViewService]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;
