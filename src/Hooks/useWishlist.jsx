import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";



const useWishlist = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { data: wishes = [], refetch } = useQuery({
        queryKey: ["wishlist"],
        queryFn: async () => {
            const result = await axiosPublic.get("/wishlist");
            return result.data;
        },
    });
    const theUserWishlist = wishes.filter(wishlist => wishlist?.adderMail == user?.email)
    return { wishes, theUserWishlist, refetch };
};

export default useWishlist;