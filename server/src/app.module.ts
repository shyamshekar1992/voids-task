import { Module } from '@nestjs/common';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';
import { SalesModule } from './sales/sales.module';
import { WeatherService } from './weather/weather.service';
import { InventoryService } from './inventory/inventory.service';
import { WeatherController } from './weather/weather.controller';
import { InventoryController } from './inventory/inventory.controller';
import { InventoryModule } from './inventory/inventory.module';
import { WeatherModule } from './weather/weather.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    SalesModule,
    InventoryModule,
    WeatherModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'voids-jobs.c2wwnfcaisej.eu-central-1.rds.amazonaws.com',
      port: 5432, 
      username: 'postgres_ro',
      password: 'voidsiscool',
      database: 'postgres',
      entities: [__dirname + '/../**/*.entity.ts'], 
    })
  ],
  controllers: [SalesController, WeatherController, InventoryController],
  providers: [SalesService, WeatherService, InventoryService],
})
export class AppModule {}
