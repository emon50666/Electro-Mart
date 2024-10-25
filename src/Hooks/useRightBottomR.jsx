import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRightBottomR = () => {
    const axiosPublic = useAxiosPublic();
    const { data: rightBottomRImages = [], refetch, isLoading } = useQuery({
        queryKey: ["rightBottomR"],
        queryFn: async () => {
            const result = await axiosPublic.get("/rightBottomR");
            return result.data;
        },
    });
    return { rightBottomRImages, refetch, isLoading };
};

export default useRightBottomR;
