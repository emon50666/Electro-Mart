import PropTypes from "prop-types";
import useProduct from "../../../Hooks/useProduct";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const CartTableRow = ({ item, refetchCart, setTotal }) => {
    const axiosPublic = useAxiosPublic();
    const { products, refetch } = useProduct();
    const [quantityCount, setQuantityCount] = useState(item.quantity || 1);
    const [disableBtn, setDisableBtn] = useState(false);
    const product = products.find(product => product?._id === item?.mainProductId);

    useEffect(() => {
        // Calculate and update subtotal whenever quantityCount changes
        if (product) {
            const subtotal = calculateSubtotal(product?.price, quantityCount);
            setTotal(prev => ({ ...prev, [item._id]: parseFloat(subtotal) }));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantityCount, product]);

    if (!product) {
        return null;
    }

    const increaseCount = () => {
        if (quantityCount >= parseInt(product?.quantity)) {
            toast.error("Stocks Out");
            setDisableBtn(true);
            return;
        } else {
            const increasedCount = quantityCount + 1;
            setQuantityCount(increasedCount);
        }
    };

    const decreaseCount = () => {
        if (quantityCount > 1) {  // Ensure it doesn't go below 1
            const decreasedCount = quantityCount - 1;
            setQuantityCount(decreasedCount);
            setDisableBtn(false);
        }
    };

    const handleQuantityUpdate = async () => {
        const updatedQuantity = product?.quantity - quantityCount; // Update stock
        const updatedQuantityInfo = { updatedQuantity };

        try {
            const response = await axiosPublic.patch(`/products/${product?._id}/update-quantity`, updatedQuantityInfo);
            if (response.data.modifiedCount) {
                refetch();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to update stock!");
        }
    };

    const handleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/carts/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            handleQuantityUpdate(); // Update product stock
                            refetchCart(); // Refetch the cart
                            toast.success("Item removed from cart!");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error("Failed to remove item!");
                    });
            }
        });
    };

    const calculateSubtotal = (price, quantity) => (price * quantity).toFixed(2);

    return (
        <tr className="border-b">
            <td className="py-4 flex items-center">
                <img src={product?.images[0]} alt={product?.title} className="w-16 h-16 mr-4" />
                <span>{product?.name}</span>
            </td>
            <td className="py-4">
                <p className="flex items-center gap-x-1">
                    <FaBangladeshiTakaSign />
                    {product?.price.toFixed(2)}
                </p>
            </td>
            <td className="py-4">
                <div className="flex items-center gap-x-2">
                    <button type="button"
                        onClick={decreaseCount}
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        aria-label="Decrease"
                        disabled={quantityCount === 1}
                    >
                        &minus;
                    </button>
                    <span>{quantityCount}</span>
                    <button
                        type="button"
                        onClick={increaseCount}
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        disabled={disableBtn}
                    >
                        +
                    </button>
                </div>
            </td>
            <td className="py-4">
                <p className="flex items-center gap-x-1">
                    <FaBangladeshiTakaSign />
                    {calculateSubtotal(product?.price, quantityCount)}
                </p>
            </td>
            <td
                onClick={() => handleDeleteCart(item?._id)}
                className="py-4 text-red-500 cursor-pointer"
            >
                ✕
            </td>
        </tr>
    );
};

CartTableRow.propTypes = {
    item: PropTypes.object.isRequired,
    refetchCart: PropTypes.func.isRequired,
    setTotal: PropTypes.func, 
};

export default CartTableRow;
