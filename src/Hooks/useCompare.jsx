import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useCompare = () => {
    const { user } = useAuth();
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