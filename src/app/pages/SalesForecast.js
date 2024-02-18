import { useEffect, useState } from 'react';

const SalesForecast = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/sales');
        const data = await response.json();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div>
      <h2>Sales Forecast</h2>
      <ul>
        {salesData.map((sale, index) => (
          <li key={index}>
            Location: {sale.location}, Sales: {sale.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesForecast;
