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
exports.Domain = void 0;
var typeorm_1 = require("typeorm");
var page_entity_1 = require("./page.entity");
var domain_view_entity_1 = require("./domain-view.entity");
var base_entity_1 = require("../../../core/entities/base-entity");
var Domain = /** @class */ (function (_super) {
    __extends(Domain, _super);
    function Domain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Domain.prototype, "description");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return page_entity_1.Page; }, function (page) { return page.domain; }),
        (0, typeorm_1.JoinColumn)()
    ], Domain.prototype, "pages");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return domain_view_entity_1.DomainView; }, function (domainView) { return domainView.domain; })
    ], Domain.prototype, "views");
    Domain = __decorate([
        (0, typeorm_1.Entity)()
    ], Domain);
    return Domain;
}(base_entity_1.BaseEntity));
exports.Domain = Domain;
