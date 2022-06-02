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
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var create_product_dto_1 = require("./dto/create-product.dto");
var platform_express_1 = require("@nestjs/platform-express");
var swagger_1 = require("@nestjs/swagger");
var fileInterceptorLocalOptions_1 = require("../../utils/fileInterceptorLocalOptions");
var roles_decorator_1 = require("../auth/decorators/roles.decorator");
var role_enum_1 = require("../auth/enums/role.enum");
var jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
        this.uploadsUrl = "http://".concat(process.env.HOST_ADDRESS, ":").concat(process.env.SERVER_PORT, "/").concat(process.env.UPLOADS_DIRECTORY, "/");
    }
    ProductsController.prototype.findAll = function (category, sortBy, sortMethod, limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var query, products, productsCountInCategory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            sortBy: sortBy,
                            sortMethod: sortMethod,
                            limit: limit,
                            offset: offset
                        };
                        category ? Object.assign(query, { category: category }) : null;
                        return [4 /*yield*/, this.productsService.findAll(query)];
                    case 1:
                        products = _a.sent();
                        if (!category) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.productsService.count(category)];
                    case 2:
                        productsCountInCategory = _a.sent();
                        return [2 /*return*/, {
                                productsCountInCategory: productsCountInCategory,
                                products: products
                            }];
                    case 3: return [4 /*yield*/, this.productsService.count()];
                    case 4:
                        productsCountInCategory = _a.sent();
                        return [2 /*return*/, {
                                productsCountInCategory: productsCountInCategory,
                                products: products
                            }];
                }
            });
        });
    };
    ProductsController.prototype.findByViewsCount = function (category, sortBy, sortMethod, limit, offset) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            sortBy: sortBy,
                            sortMethod: sortMethod,
                            limit: limit,
                            offset: offset
                        };
                        return [4 /*yield*/, this.productsService.findMostPopularFromLastDays(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsController.prototype.addImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, image];
            });
        });
    };
    ProductsController.prototype.metrics = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productsService.count(category)];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, { count: count }];
                }
            });
        });
    };
    ProductsController.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productsService.findOne(id)];
                    case 1:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, {
                                    statusCode: common_1.HttpStatus.NOT_FOUND,
                                    message: 'Not found product'
                                }];
                        }
                        product.image = "".concat(this.uploadsUrl).concat(product.image);
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductsController.prototype.create = function (createProductDto) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productsService.create(createProductDto)];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, {
                                product: product,
                                status: common_1.HttpStatus.CREATED,
                                message: 'Product has been created'
                            }];
                }
            });
        });
    };
    ProductsController.prototype.findOneAndDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productsService["delete"](id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                status: common_1.HttpStatus.OK,
                                message: 'Product has been deleted'
                            }];
                }
            });
        });
    };
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get all products' }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            isArray: true,
            description: 'Return all products.'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'category',
            type: 'string',
            required: false,
            example: 'solar-panels',
            description: 'Format name of category'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'sortBy',
            type: 'string',
            required: false,
            example: 'defaultPrice',
            description: 'Name of column by which rows will sort'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'sortMethod',
            type: 'string',
            required: false,
            example: 'ASC'
        }),
        (0, swagger_1.ApiQuery)({ name: 'limit', type: 'number', required: false }),
        (0, swagger_1.ApiQuery)({ name: 'offset', type: 'number', required: false }),
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('category')),
        __param(1, (0, common_1.Query)('sortBy', new common_1.DefaultValuePipe('createdAt'))),
        __param(2, (0, common_1.Query)('sortMethod', new common_1.DefaultValuePipe('DESC'))),
        __param(3, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
        __param(4, (0, common_1.Query)('offset', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe))
    ], ProductsController.prototype, "findAll");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get products by views count' }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            isArray: true,
            description: 'Return products views by given filter.'
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
        (0, swagger_1.ApiQuery)({
            name: 'category',
            type: 'string',
            required: false,
            example: 'solar-panels',
            description: 'Format name of category'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'sortBy',
            type: 'string',
            required: false,
            example: 'defaultPrice',
            description: 'Name of column by which rows will sort'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'sortMethod',
            type: 'string',
            required: false,
            example: 'ASC'
        }),
        (0, swagger_1.ApiQuery)({ name: 'limit', type: 'number', required: false }),
        (0, swagger_1.ApiQuery)({ name: 'offset', type: 'number', required: false }),
        (0, common_1.Get)('views'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
        __param(0, (0, common_1.Query)('category')),
        __param(1, (0, common_1.Query)('sortBy', new common_1.DefaultValuePipe('createdAt'))),
        __param(2, (0, common_1.Query)('sortMethod', new common_1.DefaultValuePipe('DESC'))),
        __param(3, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
        __param(4, (0, common_1.Query)('offset', new common_1.DefaultValuePipe(0), common_1.ParseIntPipe))
    ], ProductsController.prototype, "findByViewsCount");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Add image' }),
        (0, swagger_1.ApiCreatedResponse)({
            status: common_1.HttpStatus.CREATED,
            description: 'Return object containing file metadata and access information.'
        }),
        (0, swagger_1.ApiForbiddenResponse)({
            status: common_1.HttpStatus.FORBIDDEN,
            description: 'Forbidden resource.'
        }),
        (0, common_1.Post)('image'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', fileInterceptorLocalOptions_1.options)),
        __param(0, (0, common_1.UploadedFile)())
    ], ProductsController.prototype, "addImage");
    __decorate([
        (0, swagger_1.ApiOperation)({
            summary: 'Get count of all products or products from given category'
        }),
        (0, swagger_1.ApiQuery)({
            name: 'category',
            type: 'string',
            required: false,
            example: 'solar-panels',
            description: 'Format name of category'
        }),
        (0, swagger_1.ApiOkResponse)({
            status: common_1.HttpStatus.OK,
            description: 'Return products count.'
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
        (0, swagger_1.ApiHeader)({
            name: 'Authorization',
            required: true,
            description: 'JWT token'
        }),
        (0, common_1.Get)('metrics'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        __param(0, (0, common_1.Query)('category'))
    ], ProductsController.prototype, "metrics");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Get product by id' }),
        (0, swagger_1.ApiOkResponse)({ status: common_1.HttpStatus.OK, description: 'Return product.' }),
        (0, swagger_1.ApiNotFoundResponse)({
            status: common_1.HttpStatus.NOT_FOUND,
            description: 'Not found product.'
        }),
        (0, swagger_1.ApiParam)({
            type: 'string',
            name: 'id',
            description: 'Product id.',
            allowEmptyValue: false,
            required: true
        }),
        (0, common_1.Get)(':id'),
        (0, common_1.Header)('Cross-Origin-Embedder-Policy', 'unsafe-none'),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "findOne");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Create product' }),
        (0, swagger_1.ApiBody)({
            type: create_product_dto_1.CreateProductDto,
            required: true
        }),
        (0, swagger_1.ApiCreatedResponse)({
            status: common_1.HttpStatus.CREATED,
            description: 'The product has been successfully created.'
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
        (0, common_1.Post)(),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
        __param(0, (0, common_1.Body)())
    ], ProductsController.prototype, "create");
    __decorate([
        (0, swagger_1.ApiOperation)({ summary: 'Delete product by given id' }),
        (0, swagger_1.ApiParam)({
            type: 'string',
            name: 'id',
            description: 'Product id.',
            allowEmptyValue: false,
            required: true
        }),
        (0, swagger_1.ApiCreatedResponse)({
            status: common_1.HttpStatus.CREATED,
            description: 'The product has been successfully deleted.'
        }),
        (0, swagger_1.ApiForbiddenResponse)({
            status: common_1.HttpStatus.FORBIDDEN,
            description: 'Forbidden resource.'
        }),
        (0, swagger_1.ApiHeader)({
            name: 'User-Roles',
            required: true,
            description: 'User role, if they is the admin they has access to data',
            example: 'admin'
        }),
        (0, swagger_1.ApiHeader)({
            name: 'Authorization',
            required: true,
            description: 'JWT token'
        }),
        (0, common_1.Delete)(':id'),
        (0, roles_decorator_1.Roles)(role_enum_1.Role.ADMIN),
        (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
        __param(0, (0, common_1.Param)('id'))
    ], ProductsController.prototype, "findOneAndDelete");
    ProductsController = __decorate([
        (0, swagger_1.ApiTags)('products'),
        (0, common_1.Controller)('products')
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
