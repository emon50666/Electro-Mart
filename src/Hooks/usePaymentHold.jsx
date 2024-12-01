import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const usePaymentHold = () => {

    const axiosPublic = useAxiosPublic();
    const { data: paymentHolding = [],  refetch ,isLoading} = useQuery({
        queryKey: ["paymentHolding"],
        queryFn: async () => {
            const result = await axiosPublic.get(`/paymentHolding`);
            return result.data;
        },
    });
    return {paymentHolding, refetch,isLoading};
};

export default usePaymentHold;
