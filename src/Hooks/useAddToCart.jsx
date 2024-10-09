import toast from "react-hot-toast";
import UserAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const useAddToCart = () => {
    const { user } = UserAuth();
    const axiosPublic = useAxiosPublic();

    const handleAddCart = (product) => {
        const cartProductInfo = {
            mainProductId: product._id,
            adderMail: user?.email,
        };

        axiosPublic.post("/carts", cartProductInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Added to cart");
                }
            })
            .catch(err => {
                console.log(`Error adding to cart: ${err}`);
            });
    };

    return handleAddCart;
};
export default useAddToCart;