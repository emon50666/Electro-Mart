import PropType from "prop-types";
import useProduct from "../../../Hooks/useProduct";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useState } from "react";

const CartTableRow = ({ item }) => {
    const { products } = useProduct();
    const [quantityCount, setQuantityCount] = useState(1)
    const [disableBtn, setDisableBtn] = useState(false)
    const product = products.find(product => product?._id == item?.mainProductId)
    console.log(product);
    const calculateSubtotal = (price, quantity) => (price * quantity).toFixed(2);

    const increaseCount = () => {
        if (quantityCount === parseInt(product?.quantity)) {
            toast.error("Stocks Out")
            setDisableBtn(true)
            return;
        } else {
            const increasedCount = quantityCount + 1;
            setQuantityCount(increasedCount)
        }
    }
    const decreaseCount = () => {
        if (quantityCount > 0) {
            const decreasedCount = quantityCount - 1;
            setQuantityCount(decreasedCount)
            setDisableBtn(false)
        }
    }
    return (
        <tr className="border-b">
            <td className="py-4 flex items-center">
                <img src={product?.images[0]} alt={product?.title} className="w-16 h-16 mr-4" />
                <span>{product?.name}</span>
            </td>
            <td className="py-4">
                <p className="flex items-center gap-x-1"><FaBangladeshiTakaSign />{product?.price.toFixed(2)}</p>
            </td>
            <td className="py-4">
                <div className="flex items-center gap-x-2">
                    <button type="button"
                        onClick={() => decreaseCount()}
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" tabIndex="-1" aria-label="Decrease" data-hs-input-number-decrement="">
                        &minus;
                    </button>
                    <span>{quantityCount}</span>
                    <button
                        type="button"
                        onClick={() => increaseCount()}
                        disabled={disableBtn}
                        className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        +
                    </button>
                </div>
            </td>
            <td className="py-4">
                <p className="flex items-center gap-x-1">
                    <FaBangladeshiTakaSign />{calculateSubtotal(product?.price, product?.quantity)}
                </p>
            </td>
            <td className="py-4 text-red-500 cursor-pointer">✕</td>
        </tr>
    );
};
CartTableRow.propTypes = {
    item: PropType.object,
}
export default CartTableRow;