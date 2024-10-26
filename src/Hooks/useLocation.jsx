import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useLocation = () => {
    const axiosPublic = useAxiosPublic();
    const { data: locations = [], refetch ,isLoading} = useQuery({
        queryKey: ["location"],
        queryFn: async () => {
            const result = await axiosPublic.get("/locations");
            return result.data;
        },
    });
    return {locations, refetch,isLoading};
};

export default useLocation;
