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
exports.ProductsService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var product_entity_1 = require("./entities/product.entity");
var typeorm_2 = require("typeorm");
var product_view_entity_1 = require("./entities/product-view.entity");
var product_attributes_entity_1 = require("./entities/product-attributes.entity");
var ProductsService = /** @class */ (function () {
    function ProductsService(productsRepository, viewsRepository, productAttributesRepository, categoriesService, categoryViewService) {
        this.productsRepository = productsRepository;
        this.viewsRepository = viewsRepository;
        this.productAttributesRepository = productAttributesRepository;
        this.categoriesService = categoriesService;
        this.categoryViewService = categoryViewService;
        this.uploadsUrl = "http://".concat(process.env.HOST_ADDRESS, ":").concat(process.env.SERVER_PORT, "/").concat(process.env.UPLOADS_DIRECTORY, "/");
    }
    ProductsService.prototype.findAll = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var qb, category_1, sort, order, products, _i, products_1, product, productAttributesQb, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_2.getRepository)(product_entity_1.Product)
                            .createQueryBuilder('product')
                            .innerJoinAndSelect('product.category', 'category')
                            .where('product.isDeleted=0')];
                    case 1:
                        qb = _b.sent();
                        if (!('category' in query)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.categoriesService.findByFormatName(query.category)];
                    case 2:
                        category_1 = _b.sent();
                        qb.andWhere(new typeorm_2.Brackets(function (qb) {
                            qb.where('product.category = :id', { id: category_1.id });
                        }));
                        return [4 /*yield*/, this.categoryViewService.addToCategory(category_1)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        sort = "product.".concat(query.sortBy);
                        order = query.sortMethod.toUpperCase();
                        qb.orderBy(sort, order);
                        qb.limit(query.limit);
                        qb.offset(query.offset * query.limit);
                        return [4 /*yield*/, qb.getMany()];
                    case 5:
                        products = _b.sent();
                        products.forEach(function (product) {
                            product.image = "".concat(_this.uploadsUrl).concat(product.image);
                        });
                        _i = 0, products_1 = products;
                        _b.label = 6;
                    case 6:
                        if (!(_i < products_1.length)) return [3 /*break*/, 10];
                        product = products_1[_i];
                        return [4 /*yield*/, (0, typeorm_2.getRepository)(product_attributes_entity_1.ProductAttributes)
                                .createQueryBuilder('attribute')
                                .where('attribute.productId = :id', { id: product.id })];
                    case 7:
                        productAttributesQb = _b.sent();
                        _a = product;
                        return [4 /*yield*/, productAttributesQb.getMany()];
                    case 8:
                        _a.attributes = _b.sent();
                        _b.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 6];
                    case 10: return [2 /*return*/, products];
                }
            });
        });
    };
    ProductsService.prototype.findMostPopularFromLastDays = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var qb, category_2, offset, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_2.getRepository)(product_entity_1.Product)
                            .createQueryBuilder('product')
                            .innerJoinAndSelect('product.views', 'product_views')
                            .select('product.id', 'productId')
                            .addSelect('product.name', 'productName')
                            .addSelect('product.image', 'productImage')
                            .addSelect('product.categoryId')
                            .addSelect('SUM(product_views.value)', 'productViews')
                            .where('product_views.createdAt > DATE_SUB(CURRENT_TIMESTAMP, INTERVAL 7 DAY)')
                            .andWhere('product.isDeleted = 0')];
                    case 1:
                        qb = _a.sent();
                        if (!('category' in query)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.categoriesService.findByFormatName(query.category)];
                    case 2:
                        category_2 = _a.sent();
                        qb.andWhere(new typeorm_2.Brackets(function (qb) {
                            qb.where('product.category = :id', { id: category_2.id });
                        }));
                        _a.label = 3;
                    case 3:
                        if ('limit' in query) {
                            qb.limit(query.limit);
                        }
                        if ('offset' in query) {
                            offset = 'limit' in query ? query.limit * query.offset : query.offset;
                            qb.offset(offset);
                        }
                        qb.groupBy('product.id');
                        order = 'DESC';
                        if ('order' in query) {
                            order = query.order.toUpperCase();
                            qb.orderBy('productViews', order);
                        }
                        qb.orderBy('productViews', order);
                        return [4 /*yield*/, qb.getRawMany()];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductsService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, product, category, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            where: { id: id, isDeleted: false },
                            relations: ['category', 'views', 'attributes']
                        };
                        return [4 /*yield*/, this.productsRepository.findOne(options)];
                    case 1:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.categoriesService.findById(product.category.id)];
                    case 2:
                        category = _a.sent();
                        return [4 /*yield*/, this.categoryViewService.addToCategory(category)];
                    case 3:
                        _a.sent();
                        view = new product_view_entity_1.ProductView();
                        view.product = product;
                        return [4 /*yield*/, this.viewsRepository.save(view)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, this.productsRepository.findOne(options)];
                }
            });
        });
    };
    ProductsService.prototype.count = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var wereOptions, categoryEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wereOptions = { isDeleted: false };
                        if (!category) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.categoriesService.findByFormatName(category)];
                    case 1:
                        categoryEntity = _a.sent();
                        Object.assign(wereOptions, {
                            category: categoryEntity
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.productsRepository.count(wereOptions)];
                }
            });
        });
    };
    ProductsService.prototype.create = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var category, newProduct, attributes, productAttributes, _i, attributes_1, attribute, key, value, newAttribute, createdAttribute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.categoriesService.findByFormatName(product.category)];
                    case 1:
                        category = _a.sent();
                        product.category = category.id;
                        return [4 /*yield*/, this.productsRepository.save(product)];
                    case 2:
                        newProduct = _a.sent();
                        attributes = JSON.parse(product.dataSheet);
                        productAttributes = [];
                        console.log(attributes);
                        if (!(attributes.length > 0)) return [3 /*break*/, 6];
                        _i = 0, attributes_1 = attributes;
                        _a.label = 3;
                    case 3:
                        if (!(_i < attributes_1.length)) return [3 /*break*/, 6];
                        attribute = attributes_1[_i];
                        key = attribute.key, value = attribute.value;
                        newAttribute = new product_attributes_entity_1.ProductAttributes();
                        newAttribute.name = key;
                        newAttribute.value = value;
                        newAttribute.product = newProduct;
                        return [4 /*yield*/, this.productAttributesRepository.save(newAttribute)];
                    case 4:
                        createdAttribute = _a.sent();
                        productAttributes.push(createdAttribute);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        newProduct.attributes = productAttributes;
                        return [4 /*yield*/, this.productsRepository.save(newProduct)];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, newProduct];
                }
            });
        });
    };
    ProductsService.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        product = _a.sent();
                        product.isDeleted = true;
                        return [2 /*return*/, this.productsRepository.save(product)];
                }
            });
        });
    };
    ProductsService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
        __param(1, (0, typeorm_1.InjectRepository)(product_view_entity_1.ProductView)),
        __param(2, (0, typeorm_1.InjectRepository)(product_attributes_entity_1.ProductAttributes))
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
