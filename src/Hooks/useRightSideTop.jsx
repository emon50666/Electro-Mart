import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useRightSideTop = () => {
    const axiosPublic = useAxiosPublic();
    const { data: rightTopImages = [], refetch, isLoading } = useQuery({
        queryKey: ["rightTop"],
        queryFn: async () => {
            const result = await axiosPublic.get("/rightTop");
            return result.data;
        },
    });
    return { rightTopImages, refetch, isLoading };
};

export default useRightSideTop;
