import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useUserOrder = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: orders = [], refetch,isLoading } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const result = await axiosPublic.get("/orders");
            return result.data;
        },
    });
    const theUserOrders = orders?.filter(cart => cart?.adderMail == user?.email)
    return { orders, theUserOrders, refetch,isLoading };
};

export default useUserOrder;
