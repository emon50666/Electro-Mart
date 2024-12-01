import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useCart from "./useCart";

const useAddToCart = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const { carts, refetch } = useCart();

    // // console.log(carts)

    const handleAddCart = (product, quantity = 1) => {
        quantity = quantity === 0 ? 1 : quantity; // Set quantity to 1 if it is 0

        const cartItem = carts.find(cart => cart?.mainProductId === product?._id && cart?.adderMail === user?.email);

        if (product?.quantity <= 0) {
            toast.error("Stock Out");
            return;
        }

        if (cartItem) {
            toast.error("Already added to cart");
            return;
        }

        const subtotal = (product?.price * quantity).toFixed(2);
        
        
        const cartProductInfo = {
            mainProductId: product._id,
            selectedQuantity: quantity,
            subtotal: parseInt(subtotal),
            adderMail: user?.email,
        };

        axiosPublic.post("/carts", cartProductInfo)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Added to cart");
                    refetch();
                }
            })
            .catch(err => {
                console.error(`Error adding to cart: ${err}`);
                toast.error("Failed to add to cart");
            });
    };

    return handleAddCart;
};

export default useAddToCart;
