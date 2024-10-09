import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import UserAuth from "./useAuth";


const useCompare = () => {
    const { user } = UserAuth();
    const axiosPublic = useAxiosPublic();
    const { data: compares = [], refetch } = useQuery({
        queryKey: ["compares"],
        queryFn: async () => {
            const result = await axiosPublic.get("/compares");
            return result.data;
        },
    });
    const theUserCompares = compares.filter(compare => compare?.adderMail == user?.email)
    return { compares, theUserCompares, refetch };
};

export default useCompare;