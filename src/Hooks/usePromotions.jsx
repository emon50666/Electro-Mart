import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePromotions = () => {
    const axiosPublic = useAxiosPublic();
    const { data: promotionsProducts = [], refetch } = useQuery({
        queryKey: ["promotionsProduct"],
        queryFn: async () => {
            const result = await axiosPublic.get("/promotions");
            return result.data;
        },
    });
    return { promotionsProducts, refetch };
};

export default usePromotions;
