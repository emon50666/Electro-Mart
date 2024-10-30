// useSuccess.js
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useSuccess = () => {
    const { tranId } = useParams(); // Get tranId from the URL
    const [payment, setPayment] = useState(null); // Store payment details
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPayment = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/payments/${tranId}`);
                setPayment(response.data);
            } catch (error) {
                console.error("Error fetching payment details:", error);
            } finally {
                setIsLoading(false); // Stop loading
            }
        };

        fetchPayment(); // Fetch payment data when component loads
    }, [tranId]);

    return { payment, isLoading, tranId };
};

export default useSuccess;
