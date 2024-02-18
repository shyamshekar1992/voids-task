// Import Axios
import axios from 'axios';

// Define a function to fetch forecasted sales data from the backend
const fetchSalesData = async () => {
  try {
    // Make a GET request to your Nest.js API endpoint
    const response = await axios.get('http://localhost:3001/api/sales');
    
    // Return the data fetched from the backend
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error fetching sales data:', error);
    throw new Error('Failed to fetch sales data');
  }
};

export { fetchSalesData };
