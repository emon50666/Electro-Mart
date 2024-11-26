import { useState, useEffect } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useFilteredOrders = (user) => {
  const axiosPublic = useAxiosPublic();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user || !user.email) {
        setError("User is not authenticated");
        setLoading(false);
        return;
      }
      try {
        console.log(user.email);
        const response = await axiosPublic.get(`/orders`, {
          params: { email: user.email }, // Pass the email in the query parameters
        }); // Replace with your API endpoint

        const filteredOrders = response.data.filter(
          (order) => order.userEmail === user.email
        );
        setOrders(filteredOrders);
      } catch (err) {
        setError("Error fetching orders", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [axiosPublic, user]);

  return { orders, loading, error };
};

export default useFilteredOrders;
