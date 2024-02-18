import { Module } from '@nestjs/common';
import { SalesController} from './sales.controller';
import { SalesService} from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    
imports: [
    TypeOrmModule.forFeature([SalesRepository]), // Register the SalesRepository as a feature of TypeOrmModule
  ],
controllers: [SalesController],
providers: [SalesService],

})
export class SalesModule {}
