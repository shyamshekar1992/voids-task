// src/sales/sales.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { ForecastEntity } from '../forecast/dto/forecast.entity';

@EntityRepository(ForecastEntity)
export class SalesRepository extends Repository<ForecastEntity> {
  async getForecastedSalesForLocation(location: string): Promise<ForecastEntity[]> {
    // Implement logic to fetch forecasted sales data from the database
    // This is just a placeholder, you should replace it with actual database query logic
    const forecastData = await this.createQueryBuilder('forecast')
      .where('forecast.location = :location', { location })
      .getMany();

    return forecastData;
  }
}
