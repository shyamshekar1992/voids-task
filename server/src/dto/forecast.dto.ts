export class ForecastDto {
  id: number;
  location: string;
  date: Date;
  salesQuantity: number; // Add the missing property

  constructor(id: number, location: string, date: Date, salesQuantity: number) {
    this.id = id;
    this.location = location;
    this.date = date;
    this.salesQuantity = salesQuantity; 
  }
}