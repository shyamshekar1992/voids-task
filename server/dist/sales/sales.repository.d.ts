import { Repository } from 'typeorm';
import { ForecastEntity } from '../forecast/dto/forecast.entity';
export declare class SalesRepository extends Repository<ForecastEntity> {
    getForecastedSalesForLocation(location: string): Promise<ForecastEntity[]>;
}
