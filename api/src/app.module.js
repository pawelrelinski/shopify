"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var products_module_1 = require("./modules/products/products.module");
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("@nestjs/config");
var users_module_1 = require("./modules/users/users.module");
var auth_module_1 = require("./modules/auth/auth.module");
var platform_express_1 = require("@nestjs/platform-express");
var orders_module_1 = require("./modules/orders/orders.module");
var categories_module_1 = require("./modules/categories/categories.module");
var domain_module_1 = require("./modules/domain/domain.module");
var core_1 = require("@nestjs/core");
var roles_guard_1 = require("./modules/auth/roles.guard");
var shipping_methods_module_1 = require("./modules/shipping-methods/shipping-methods.module");
var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot(),
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function () { return ({
                        type: 'mysql',
                        host: process.env.DB_HOST,
                        port: parseInt(process.env.DB_PORT) || 3306,
                        username: process.env.DB_USER,
                        password: process.env.DB_PASSWORD,
                        database: process.env.DB_NAME,
                        entities: [__dirname + '/**/*.entity{.ts,.js}'],
                        synchronize: true
                    }); }
                }),
                platform_express_1.MulterModule.register({
                    dest: './uploads'
                }),
                products_module_1.ProductsModule,
                categories_module_1.CategoriesModule,
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                orders_module_1.OrdersModule,
                domain_module_1.DomainModule,
                shipping_methods_module_1.ShippingMethodsModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_GUARD,
                    useClass: roles_guard_1.RolesGuard
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
