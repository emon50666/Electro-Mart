// useSuccess.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";

const useSuccess = () => {
  const axiosPublic = useAxiosPublic();
  const { sTranId } = useParams(); // Get sTranId from the URL

  // console.log(sTranId)

  const [payment, setPayment] = useState(null); // Store payment details
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axiosPublic.get(`/orders/39054`);
        setPayment(response.data);

        // console.log(sTranId)
      } catch (error) {
        console.error("Error fetching payment details:", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchPayment(); // Fetch payment data when component loads
  }, [axiosPublic, sTranId]);

  // console.log(payment)

  return { payment, isLoading, sTranId };
};

export default useSuccess;
