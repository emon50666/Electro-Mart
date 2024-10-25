import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCheckout = () => {
    const axiosPublic = useAxiosPublic();
    const { data: checkout = [] ,isLoading} = useQuery({
        queryKey: ["checkout"],
        queryFn: async () => {
            const result = await axiosPublic.post("/checkout");
            return result.data;
        },
    });
    return {checkout, isLoading};
};

export default useCheckout;
