"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DomainModule = void 0;
var common_1 = require("@nestjs/common");
var domain_controller_1 = require("./domain.controller");
var domain_service_1 = require("./domain.service");
var typeorm_1 = require("@nestjs/typeorm");
var domain_entity_1 = require("./entities/domain.entity");
var page_entity_1 = require("./entities/page.entity");
var page_view_entity_1 = require("./entities/page-view.entity");
var config_1 = require("@nestjs/config");
var domain_view_entity_1 = require("./entities/domain-view.entity");
var DomainModule = /** @class */ (function () {
    function DomainModule() {
    }
    DomainModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule,
                typeorm_1.TypeOrmModule.forFeature([domain_entity_1.Domain, domain_view_entity_1.DomainView, page_entity_1.Page, page_view_entity_1.PageView]),
            ],
            controllers: [domain_controller_1.DomainController],
            providers: [domain_service_1.DomainService]
        })
    ], DomainModule);
    return DomainModule;
}());
exports.DomainModule = DomainModule;
