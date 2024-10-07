import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProduct = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], refetch } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const result = await axiosPublic.get("/products");
            return result.data;
        },
    });
    return [products, refetch];
};

export default useProduct;
