import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCategory = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const result = await axiosPublic.get("/products");
            return result.data;
        },
    });

    // Extract unique category
    const category = Array.from(new Set(products.map(product => product.category)));

    return { category, refetch, isLoading };
};

export default useCategory;
