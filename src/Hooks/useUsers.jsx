import { useQuery } from "@tanstack/react-query";
import UserAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUsers = () => {
    const { user } = UserAuth();
    const axiosPublic = useAxiosPublic();
    const { data: users = [], refetch, isPending } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const result = await axiosPublic.get("/users");
            return result.data;
        },
    });
    const theUser = users.find((theUser) => theUser?.email == user?.email);
    return { users, theUser, refetch, isPending };
};

export default useUsers;