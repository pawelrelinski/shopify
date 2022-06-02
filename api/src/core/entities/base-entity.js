"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BaseEntity = void 0;
var typeorm_1 = require("typeorm");
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BaseEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', "default": true, nullable: true })
    ], BaseEntity.prototype, "isActive");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', "default": false, nullable: true })
    ], BaseEntity.prototype, "isArchived");
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp',
            nullable: true
        })
    ], BaseEntity.prototype, "createdOn");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 300, "default": '', nullable: true })
    ], BaseEntity.prototype, "createdBy");
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp',
            nullable: true
        })
    ], BaseEntity.prototype, "lastChangedDateTime");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: true })
    ], BaseEntity.prototype, "lastChangedBy");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: true })
    ], BaseEntity.prototype, "internalComment");
    __decorate([
        (0, typeorm_1.Column)({ type: 'int', "default": 1 })
    ], BaseEntity.prototype, "version");
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
