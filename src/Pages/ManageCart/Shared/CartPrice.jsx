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

    return (
        <div className='h-full border-2 border-gray-200 p-8 rounded-lg font_lexend'>
            <h2 className="text-2xl font-semibold">Carts Total</h2>

            {/* Subtotal */}
            <div className='flex justify-between items-center mt-5 border-b border-slate-300 pb-2'>
                <h4 className="font-semibold text-lg">Subtotal</h4>
                <p className='flex items-center gap-1 text-lg text-thin text-gray-400'>
                    <FaBangladeshiTakaSign />
                    {productTotal}
                </p>
            </div>

            {/* Shipping options */}
            <div className='border-b border-slate-300 pb-2'>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span>
                            <span className="label-text">Flat rate: </span>
                            <span className="label-text text-blue-600">150</span>
                        </span>
                        <input
                            type="radio"
                            name="shipping"
                            className="radio checked:bg-blue-500"
                            value={150}
                            onChange={handleShippingChange}
                            checked={shippingCost === 150}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span>
                            <span className="label-text">Free shipping: </span>
                            <span className="label-text text-blue-600">0</span>
                        </span>
                        <input
                            type="radio"
                            name="shipping"
                            className="radio checked:bg-blue-500"
                            value={0}
                            onChange={handleShippingChange}
                            checked={shippingCost === 0}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span>
                            <span className="label-text">Local pickup: </span>
                            <span className="label-text text-blue-600">100</span>
                        </span>
                        <input
                            type="radio"
                            name="shipping"
                            className="radio checked:bg-blue-500"
                            value={100}
                            onChange={handleShippingChange}
                            checked={shippingCost === 100}
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
        </div>
    );
};

CartPrice.propTypes = {
    productTotal: PropTypes.string.isRequired,
};

export default CartPrice;
