import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('forecasts') // Assuming 'forecasts' is the name of your table in the database
export class ForecastEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'integer' })
  salesQuantity: number;

  // You can add more columns as needed for your forecast data

  // Optionally, you can define relationships with other entities here

}
