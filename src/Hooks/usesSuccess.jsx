// useSuccess.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useSuccess = () => {
    const { sTranId } = useParams(); // Get sTranId from the URL

    console.log(sTranId)
  
    const [payment, setPayment] = useState(null); // Store payment details
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get('http://localhost:9000/orders/39054');
                setPayment(response.data);
                
                console.log(sTranId)
            } catch (error) {
                console.error("Error fetching payment details:", error);
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        fetchPayment(); // Fetch payment data when component loads
    }, [sTranId]);

    console.log(payment)

    return { payment, isLoading, sTranId };
};

export default useSuccess;
