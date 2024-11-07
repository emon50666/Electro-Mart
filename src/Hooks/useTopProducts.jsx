import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTopProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const result = await axiosPublic.get("/products");
            return result.data;
        },
    });

    // Function to get top-selling products
    const getTopSellingProducts = (topN = 105) => {
        return [...products]
            .sort((a, b) => (b.soldQuantity || 0) - (a.soldQuantity || 0))
            .slice(0, topN);
    };

    return { products, refetch, isLoading, getTopSellingProducts };
};

export default useTopProduct;
