import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStores = () => {
    const axiosPublic = useAxiosPublic();
    const { data: stores = [], refetch } = useQuery({
        queryKey: ["stores"],
        queryFn: async () => {
            const result = await axiosPublic.get("/stores");
            return result.data;
        },
    });
    return { stores, refetch };
};

export default useStores;
