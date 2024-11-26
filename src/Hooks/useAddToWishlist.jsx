import toast from "react-hot-toast";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import useWishlist from "./useWishlist";


const useAddToWishlist = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { wishes, refetch } = useWishlist();

    const handleAddWishlist = (wishlistProduct) => {
        const wishlistItem = wishes.find(Wishlist => Wishlist?.mainProductId === wishlistProduct?._id && Wishlist?.adderMail === user?.email);

        if (wishlistItem) {
            toast.error("Already added to Wishlist");
            return;
        }

        const WishlistProductInfo = {
            mainProductId: wishlistProduct._id,
            adderMail: user?.email,            
        };

        axiosPublic.post("/wishlist", WishlistProductInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Added to Wishlist");
                    refetch()
                }
            })
            .catch(err => {
                console.error(`Error adding to Wishlist: ${err}`);
                toast.error("Failed to add to Wishlist");
            });
    };

    return handleAddWishlist;
};

export default useAddToWishlist;