import React, { useState, useEffect } from 'react';
import { fetchSalesData } from '../utils/api';

const SalesPage = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSalesData();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Forecasted Sales</h1>
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

export default SalesPage;
