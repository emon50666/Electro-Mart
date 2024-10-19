import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReview = () => {
    const axiosPublic = useAxiosPublic();
    const { data: reviews = [], refetch ,isLoading} = useQuery({
        queryKey: ["review"],
        queryFn: async () => {
            const result = await axiosPublic.get("/review");
            return result.data;
        },
    });
    return {reviews, refetch,isLoading};
};

export default useReview;
