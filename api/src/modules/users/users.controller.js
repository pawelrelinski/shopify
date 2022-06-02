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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var roles_decorator_1 = require("../auth/decorators/roles.decorator");
var role_enum_1 = require("../auth/enums/role.enum");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findAll()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users.map(function (user) {
                                return {
                                    id: user.id,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                    createdAt: user.createdAt
                                };
                            })];
                }
            });
        });
    };
    UsersController.prototype.metrics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.count()];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, { count: count }];
                }
            });
        });
    };
    UsersController.prototype.findOneById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findOneById(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, {
                                    statusCode: common_1.HttpStatus.NOT_FOUND,
                                    message: 'Not found user with given id'
                                }];
                        }
                        return [2 /*return*/, { user: user }];
                }
            });
        });
    };
    UsersController.prototype.updateAttribute = function (id, attrName, attrValue) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.usersService.findOneByIdAndUpdate(id, attrName, attrValue)];
            });
        });
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get all users.' }),
        (0, swagger_1.ApiHeader)({
            name: 'User-Roles',
            required: false,
            description: 'User role, if they is the admin they has access to data',
            example: 'admin'
        }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return all users.',
            isArray: true
        }),
        (0, common_1.Get)(),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)
    ], UsersController.prototype, "findAll");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get count of all users' }),
        (0, swagger_1.ApiHeader)({
            name: 'User-Roles',
            required: false,
            description: 'User role, if they is the admin they has access to data',
            example: 'admin'
        }),
        (0, swagger_1.ApiOkResponse)({ status: common_1.HttpStatus.OK, description: 'Return users count.' }),
        (0, common_1.Get)('metrics'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)
    ], UsersController.prototype, "metrics");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get user by given id' }),
        (0, swagger_1.ApiParam)({
            name: 'id',
            type: 'string',
            required: true,
            description: 'User id'
        }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return user by given id.'
        }),
        (0, swagger_1.ApiNotFoundResponse)({
            status: common_1.HttpStatus.NOT_FOUND,
            description: 'Not found user with given id'
        }),
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsersController.prototype, "findOneById");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Update specific user attribute' }),
        (0, swagger_1.ApiParam)({
            name: 'id',
            type: 'string',
            required: true,
            description: 'User id'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'attrName',
            type: 'string',
            required: true,
            example: 'firstName',
            description: "Name of user's column"
        }),
        (0, swagger_1.ApiQuery)({
            name: 'attrValue',
            type: 'string',
            required: true,
            example: 'John',
            description: "New value for user's column"
        }),
        (0, swagger_1.ApiCreatedResponse)({
            status: common_1.HttpStatus.CREATED,
            description: 'The user has been successfully updated.'
        }),
        (0, swagger_1.ApiForbiddenResponse)({
            status: common_1.HttpStatus.FORBIDDEN,
            description: 'Forbidden.'
        }),
        (0, common_1.Patch)(':id/attribute'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Query)('attrName')),
        __param(2, (0, common_1.Query)('attrValue'))
    ], UsersController.prototype, "updateAttribute");
    UsersController = __decorate([
        (0, swagger_1.ApiTags)('users'),
        (0, common_1.Controller)('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
