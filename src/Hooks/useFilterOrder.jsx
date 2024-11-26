import { useState, useEffect } from 'react';
import axios from 'axios';

const useFilteredOrders = (user) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.email) {
        setError('User is not authenticated');
        setLoading(false);
        return;
      }

      try {

        const response = await axios.get('http://localhost:3000/orders'); // Replace with your API endpoint

        console.log(user.email)
        const response = await axios.get('http://localhost:9000/orders', {
          params: { email: user.email } // Pass the email in the query parameters
        }); // Replace with your API endpoint

        const filteredOrders = response.data.filter(
          (order) => order.userEmail === user.email
        );
        setOrders(filteredOrders);
      } catch (err) {
        setError('Error fetching orders',err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return { orders, loading, error };
};

export default useFilteredOrders;
