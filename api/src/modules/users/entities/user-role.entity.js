"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRole = void 0;
var typeorm_1 = require("typeorm");
var role_enum_1 = require("../../auth/enums/role.enum");
var UserRole = /** @class */ (function () {
    function UserRole() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserRole.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": role_enum_1.Role,
            "default": role_enum_1.Role.USER
        })
    ], UserRole.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({
            "default": function () { return 'CURRENT_TIMESTAMP'; },
            type: 'timestamp'
        })
    ], UserRole.prototype, "createdAt");
    UserRole = __decorate([
        (0, typeorm_1.Entity)()
    ], UserRole);
    return UserRole;
}());
exports.UserRole = UserRole;
