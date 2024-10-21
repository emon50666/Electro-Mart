import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CartPrice = ({ productTotal }) => {
    const [shippingCost, setShippingCost] = useState(150);

    const handleShippingChange = (event) => {
        const selectedShippingCost = parseInt(event.target.value, 10);
        setShippingCost(selectedShippingCost);
    };

    const total = parseFloat(productTotal) + shippingCost;

    // Determine if the subtotal is zero
    const isSubtotalZero = parseFloat(productTotal) === 0;

    return (
        <div className='max-w-lg mx-auto border-2 border-gray-200 p-8 rounded-lg shadow-lg bg-white font_lexend'>
            <h2 className="text-2xl font-semibold">Carts Total</h2>

            {/* Subtotal */}
            <div className='flex justify-between items-center mt-5 border-b border-slate-300 pb-2'>
                <h4 className="font-semibold text-lg">Subtotal</h4>
                <p className='flex items-center gap-1 text-lg text-gray-400'>
                    <FaBangladeshiTakaSign />
                    {productTotal}
                </p>
            </div>

            {/* Shipping options */}
            <div className='border-b border-slate-300 pb-2 mt-4'>
                <div className="form-control">
                    <label className="label cursor-pointer flex justify-between">
                        <span>Flat rate:</span>
                        <span className="text-blue-600">150</span>
                        <input
                            type="radio"
                            name="shipping"
                            className="radio checked:bg-blue-500 w-4 h-4 ml-2"
                            value={150}
                            onChange={handleShippingChange}
                            checked={shippingCost === 150}
                            disabled={isSubtotalZero} // Disable if subtotal is 0
                        />
                    </label>
                </div>
                <div className="form-control mt-2">
                    <label className="label cursor-pointer flex justify-between">
                        <span>Free shipping:</span>
                        <span className="text-blue-600">0</span>
                        <input
                            type="radio"
                            name="shipping"
                            className="radio checked:bg-blue-500 w-4 h-4 ml-2"
                            value={0}
                            onChange={handleShippingChange}
                            checked={shippingCost === 0}
                            disabled={isSubtotalZero} // Disable if subtotal is 0
                        />
                    </label>
                </div>
                <div className="form-control mt-2">
                    <label className="label cursor-pointer flex justify-between">
                        <span>Local pickup:</span>
                        <span className="text-blue-600">100</span>
                        <input
                            type="radio"
                            name="shipping"
                            className="radio checked:bg-blue-500 w-4 h-4 ml-2"
                            value={100}
                            onChange={handleShippingChange}
                            checked={shippingCost === 100}
                            disabled={isSubtotalZero} // Disable if subtotal is 0
                        />
                    </label>
                </div>
            </div>

            {/* Total */}
            <div className='flex justify-between items-center mt-5'>
                <h4 className="font-semibold text-lg">Total</h4>
                <p className='flex items-center gap-1 text-lg text-gray-600'>
                    <FaBangladeshiTakaSign />
                    {total.toFixed(2)}
                </p>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="mt-6">
                <button
                    onClick={() => console.log("Proceeding to Checkout")}
                    className={`w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${isSubtotalZero ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isSubtotalZero} // Disable button if subtotal is 0
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

CartPrice.propTypes = {
    productTotal: PropTypes.string.isRequired,
};

export default CartPrice;
