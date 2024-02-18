import { ForecastDto } from '../dto/forecast.dto';
import { SalesRepository } from './sales.repository';
export declare class SalesService {
    private readonly salesRepository;
    constructor(salesRepository: SalesRepository);
    getForecastedSalesForLocation(location: string): Promise<ForecastDto[]>;
}
