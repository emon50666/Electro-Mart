import toast from "react-hot-toast";
import UserAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useCart from "./useCart";

const useAddToCart = () => {
    const { user } = UserAuth();
    const axiosPublic = useAxiosPublic();
    const { carts } = useCart();

    const handleAddCart = (product) => {
        const cartItem = carts.find(cart => cart?.mainProductId === product?._id);
        if (cartItem) {
            toast("Already added to cart");
            return;
        }
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
