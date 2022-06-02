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
exports.DomainView = void 0;
var typeorm_1 = require("typeorm");
var domain_entity_1 = require("./domain.entity");
var base_entity_1 = require("../../../core/entities/base-entity");
var DomainView = /** @class */ (function (_super) {
    __extends(DomainView, _super);
    function DomainView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp'
        })
    ], DomainView.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about user-agent',
            nullable: true
        })
    ], DomainView.prototype, "userAgent");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about origin',
            nullable: true
        })
    ], DomainView.prototype, "origin");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about referer',
            nullable: true
        })
    ], DomainView.prototype, "referer");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about sec-ch-ua-platform',
            nullable: true
        })
    ], DomainView.prototype, "secChUaPlatform");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about sec-ch-ua',
            nullable: true
        })
    ], DomainView.prototype, "secChUa");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about sec-ch-ua-mobile',
            nullable: true
        })
    ], DomainView.prototype, "secChUaMobile");
    __decorate([
        (0, typeorm_1.Column)({
            comment: 'Header data about accept-language',
            nullable: true
        })
    ], DomainView.prototype, "acceptLanguage");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return domain_entity_1.Domain; }, function (domain) { return domain.views; })
    ], DomainView.prototype, "domain");
    DomainView = __decorate([
        (0, typeorm_1.Entity)()
    ], DomainView);
    return DomainView;
}(base_entity_1.BaseEntity));
exports.DomainView = DomainView;
