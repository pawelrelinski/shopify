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
exports.CategoriesController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var roles_decorator_1 = require("../auth/decorators/roles.decorator");
var role_enum_1 = require("../auth/enums/role.enum");
var CategoriesController = /** @class */ (function () {
    function CategoriesController(categoriesService) {
        this.categoriesService = categoriesService;
    }
    CategoriesController.prototype.findAll = function (formatName, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, categories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = { limit: limit };
                        formatName ? Object.assign(query, { formatName: formatName }) : null;
                        return [4 /*yield*/, this.categoriesService.findAll(query)];
                    case 1:
                        categories = _a.sent();
                        return [2 /*return*/, { categories: categories }];
                }
            });
        });
    };
    CategoriesController.prototype.findByViewsCount = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoriesService.findAllWithViewsCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoriesController.prototype.findAllWithProductsCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.categoriesService.findAllWithProductsCount()];
            });
        });
    };
    CategoriesController.prototype.metrics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoriesService.count()];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, { count: count }];
                }
            });
        });
    };
    CategoriesController.prototype.finById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoriesService.findById(id)];
                    case 1:
                        category = _a.sent();
                        if (!category) {
                            return [2 /*return*/, {
                                    message: 'Category not found',
                                    statusCode: common_1.HttpStatus.NOT_FOUND
                                }];
                        }
                        return [2 /*return*/, category];
                }
            });
        });
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get all categories' }),
        (0, swagger_1.ApiQuery)({
            name: 'formatName',
            type: 'string',
            required: false,
            example: 'solar-panels',
            description: 'Format name of category'
        }),
        (0, swagger_1.ApiQuery)({ name: 'limit', type: 'number', required: false }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return all categories.',
            isArray: true
        }),
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('formatName')),
        __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe))
    ], CategoriesController.prototype, "findAll");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get categories by views count' }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return categories views by given filter.'
        }),
        (0, swagger_1.ApiForbiddenResponse)({
            status: common_1.HttpStatus.FORBIDDEN,
            description: 'Forbidden resource.'
        }),
        (0, swagger_1.ApiHeader)({
            name: 'User-Roles',
            required: false,
            description: 'User role, if they is the admin they has access to data',
            example: 'admin'
        }),
        (0, common_1.Get)('views'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
        __param(0, (0, common_1.Query)())
    ], CategoriesController.prototype, "findByViewsCount");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get product count in category' }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return count of products in categories.'
        }),
        (0, swagger_1.ApiForbiddenResponse)({
            status: common_1.HttpStatus.FORBIDDEN,
            description: 'Forbidden resource.'
        }),
        (0, swagger_1.ApiHeader)({
            name: 'User-Roles',
            required: false,
            description: 'User role, if they is the admin they has access to data',
            example: 'admin'
        }),
        (0, common_1.Get)('productsCount'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)
    ], CategoriesController.prototype, "findAllWithProductsCount");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get count of categories' }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return count of categories.'
        }),
        (0, swagger_1.ApiForbiddenResponse)({
            status: common_1.HttpStatus.FORBIDDEN,
            description: 'Forbidden resource.'
        }),
        (0, swagger_1.ApiHeader)({
            name: 'User-Roles',
            required: false,
            description: 'User role, if they is the admin they has access to data',
            example: 'admin'
        }),
        (0, common_1.Get)('metrics'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN)
    ], CategoriesController.prototype, "metrics");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get category by id' }),
        (0, swagger_1.ApiParam)({
            type: 'number',
            name: 'id',
            description: 'Category id.',
            allowEmptyValue: false,
            required: true
        }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return category by given id.'
        }),
        (0, swagger_1.ApiNotFoundResponse)({
            status: common_1.HttpStatus.NOT_FOUND,
            description: 'Category not found'
        }),
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe))
    ], CategoriesController.prototype, "finById");
    CategoriesController = __decorate([
        (0, swagger_1.ApiTags)('categories'),
        (0, common_1.Controller)('categories')
    ], CategoriesController);
    return CategoriesController;
}());
exports.CategoriesController = CategoriesController;
