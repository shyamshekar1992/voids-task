// src/sales/sales.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { ForecastDto } from '../dto/forecast.dto';
import { SalesRepository } from './sales.repository';
import { ForecastEntity } from '../forecast/dto/forecast.entity';

@Injectable()
export class SalesService {
  constructor(private readonly salesRepository: SalesRepository) {}

  async getForecastedSalesForLocation(location: string): Promise<ForecastDto[]> {
    // Fetch forecasted sales data from the repository
    const forecastData: ForecastEntity[] = await this.salesRepository.getForecastedSalesForLocation(location);

    // If no forecast data found for the location, throw NotFoundException
    if (!forecastData || forecastData.length === 0) {
      throw new NotFoundException(`No forecasted sales data found for location ${location}`);
    }

    // Map the fetched entities to DTOs
    const forecastDtoList: ForecastDto[] = forecastData.map((forecastEntity: ForecastEntity) => {
      return {
        id: forecastEntity.id,
        location: forecastEntity.location,
        date: forecastEntity.date,
        salesQuantity: forecastEntity.salesQuantity,
      };
    });

    return forecastDtoList;
  }
}
