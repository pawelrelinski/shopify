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
exports.DomainService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var domain_entity_1 = require("./entities/domain.entity");
var typeorm_2 = require("typeorm");
var page_entity_1 = require("./entities/page.entity");
var page_view_entity_1 = require("./entities/page-view.entity");
var domain_view_entity_1 = require("./entities/domain-view.entity");
var DomainService = /** @class */ (function () {
    function DomainService(domainRepository, domainViewRepository, pageRepository, pageViewRepository) {
        this.domainRepository = domainRepository;
        this.domainViewRepository = domainViewRepository;
        this.pageRepository = pageRepository;
        this.pageViewRepository = pageViewRepository;
    }
    DomainService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = (0, typeorm_2.getRepository)(domain_entity_1.Domain)
                            .createQueryBuilder('domain')
                            .innerJoinAndSelect('domain.pages', 'pages')
                            .innerJoinAndSelect('pages.views', 'views');
                        return [4 /*yield*/, qb.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DomainService.prototype.addViewToDomain = function (id, request) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, domain, domainView;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = request.headers;
                        return [4 /*yield*/, this.domainRepository.findOne(id)];
                    case 1:
                        domain = _a.sent();
                        domainView = new domain_view_entity_1.DomainView();
                        domainView.domain = domain;
                        domainView.userAgent = headers['user-agent'];
                        domainView.origin = headers['origin'];
                        domainView.referer = headers['referer'];
                        domainView.secChUaPlatform = headers['sec-ch-ua-platform'];
                        domainView.secChUa = headers['sec-ch-ua'];
                        domainView.secChUaMobile = headers['sec-ch-ua-mobile'];
                        domainView.acceptLanguage = headers['accept-language'];
                        return [4 /*yield*/, this.domainViewRepository.save(domainView)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DomainService.prototype.getDomainViews = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var qb, days, views, dates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = (0, typeorm_2.getRepository)(domain_entity_1.Domain)
                            .createQueryBuilder('domain')
                            .innerJoinAndSelect('domain.views', 'views');
                        if ('days' in query) {
                            days = query.days;
                            qb.where('views.createdAt > DATE_SUB(CURRENT_DATE, INTERVAL :days DAY)', {
                                days: days
                            });
                        }
                        qb.orderBy('views.createdAt', 'DESC');
                        return [4 /*yield*/, qb.getOne()];
                    case 1:
                        views = (_a.sent()).views;
                        if ('formatted' in query) {
                            dates = views.map(function (view) { return view.createdAt; });
                            return [2 /*return*/, dates];
                        }
                        return [2 /*return*/, views];
                }
            });
        });
    };
    DomainService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(domain_entity_1.Domain)),
        __param(1, (0, typeorm_1.InjectRepository)(domain_view_entity_1.DomainView)),
        __param(2, (0, typeorm_1.InjectRepository)(page_entity_1.Page)),
        __param(3, (0, typeorm_1.InjectRepository)(page_view_entity_1.PageView))
    ], DomainService);
    return DomainService;
}());
exports.DomainService = DomainService;
