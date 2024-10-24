import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBrands = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const result = await axiosPublic.get("/products");
            return result.data;
        },
    });

    // Extract unique brands
    const brands = Array.from(new Set(products.map(product => product.brand)));

    return { brands, refetch, isLoading };
};

export default useBrands;
