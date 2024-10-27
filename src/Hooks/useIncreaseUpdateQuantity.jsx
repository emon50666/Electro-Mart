import useAxiosPublic from "./useAxiosPublic";


const useIncreaseUpdateQuantity = () => {
    const axiosPublic = useAxiosPublic();

    const handleQuantityUpdate = async (product, cart, refetch) => {
        try {
            const updatedQuantity = parseInt(product?.quantity) + parseInt(cart?.selectedQuantity);
            const updatedQuantityInfo = { updatedQuantity };
            const response = await axiosPublic.patch(`/productQuantity/${product?._id}`, updatedQuantityInfo);
            if (response.data.modifiedCount) {
                refetch();
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    return handleQuantityUpdate;
};

export default useIncreaseUpdateQuantity;
