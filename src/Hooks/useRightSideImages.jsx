import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRightSideImages = (number) => {
    const axiosPublic = useAxiosPublic();
    const getEndpoint = () => {
        if (number === 1) return "/rightTop";
        if (number === 2) return "/rightBottomL";
        return "/rightBottomR";
    };

    const { data: rightImages = [], refetch } = useQuery({
        queryKey: [getEndpoint(), number],
        queryFn: async () => {
            const res = await axiosPublic.get(getEndpoint());
            return res.data;
        },
    });

    return [rightImages, refetch];
};

export default useRightSideImages;
