import { Injectable } from '@nestjs/common';
import { ForecastDto } from './dto/forecast.dto';
import { SalesRepository } from './sales.repository';

@Injectable()
export class SalesService {
  constructor(private readonly salesRepository: SalesRepository) {}

  async getForecastedSalesForLocation(location: string): Promise<ForecastDto[]> {
    // Fetch forecasted sales data from the repository
    const forecastData = await this.salesRepository.getForecastedSalesForLocation(location);
    
    // Map the forecastData to ForecastDto objects
    const forecastDtoList: ForecastDto[] = forecastData.map((forecastEntity: any) => ({
      id: forecastEntity.id,
      location: forecastEntity.location,
      date: forecastEntity.date,
      salesForecast: forecastEntity.salesQuantity // Assuming salesQuantity is the forecasted sales
    }));
    
    return forecastDtoList;
  }
}