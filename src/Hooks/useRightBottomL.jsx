import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRightBottomL = () => {
    const axiosPublic = useAxiosPublic();
    const { data: rightBottomLImages = [], refetch, isLoading } = useQuery({
        queryKey: ["rightBottomL"],
        queryFn: async () => {
            const result = await axiosPublic.get("/rightBottomL");
            return result.data;
        },
    });
    return { rightBottomLImages, refetch, isLoading };
};

export default useRightBottomL;
