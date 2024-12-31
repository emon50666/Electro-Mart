import { useState } from 'react';
import useCart from '../../../Hooks/useCart';
import CartTableRow from './CartTableRow';
import PropTypes from "prop-types";

const CartTable = ({ setTotalPrice }) => {
    const { theUserCarts, refetch, } = useCart();
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        return Object.values(total).reduce((sum, value) => sum + value, 0).toFixed(2);
    };
    const grandTotal = calculateTotal();
    setTotalPrice(grandTotal)
    return (
        <div className="max-w-4xl mx-auto border border-gray-200 bg-white p-6 rounded-lg shadow-md overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="py-2 text-center">Product</th>
                        <th className="py-2 text-center">Price</th>
                        <th className="py-2 text-center">Quantity</th>
                        <th className="py-2 text-center">Subtotal</th>
                        <th className="py-2 text-center">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {theUserCarts.map((item, idx) => (
                        <CartTableRow key={idx} item={item} refetchCart={refetch} setTotal={setTotal} />
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="px-4 py-2 border outline-none  rounded w-full sm:w-1/2"
                    />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-auto">
                        Apply Coupon
                    </button>
                </div>
            </div>
        </div>
    );
};
CartTable.propTypes = {
    setTotalPrice: PropTypes.func,
};
export default CartTable;
