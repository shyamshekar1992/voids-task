"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sales_controller_1 = require("./sales/sales.controller");
const sales_service_1 = require("./sales/sales.service");
const sales_module_1 = require("./sales/sales.module");
const weather_service_1 = require("./weather/weather.service");
const inventory_service_1 = require("./inventory/inventory.service");
const weather_controller_1 = require("./weather/weather.controller");
const inventory_controller_1 = require("./inventory/inventory.controller");
const inventory_module_1 = require("./inventory/inventory.module");
const weather_module_1 = require("./weather/weather.module");
const typeorm_1 = require("@nestjs/typeorm");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sales_module_1.SalesModule,
            inventory_module_1.InventoryModule,
            weather_module_1.WeatherModule, typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'voids-jobs.c2wwnfcaisej.eu-central-1.rds.amazonaws.com',
                port: 5432,
                username: 'postgres_ro',
                password: 'voidsiscool',
                database: 'postgres',
                entities: [__dirname + '/../**/*.entity.ts'],
            })
        ],
        controllers: [sales_controller_1.SalesController, weather_controller_1.WeatherController, inventory_controller_1.InventoryController],
        providers: [sales_service_1.SalesService, weather_service_1.WeatherService, inventory_service_1.InventoryService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map