import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartPrice = ({ productTotal }) => {
    // Determine if the subtotal is zero
    const isSubtotalZero = parseFloat(productTotal) === 0;

    return (
        <div className='max-w-lg mx-auto border-2 border-gray-200 p-8 rounded-lg shadow-lg bg-white font_lexend'>
            <h2 className="text-2xl font-semibold">Carts Subtotal</h2>

            {/* Subtotal */}
            <div className='flex justify-between items-center mt-5 border-b border-slate-300 pb-2'>
                <h4 className="font-semibold text-lg">Subtotal</h4>
                <p className='flex items-center gap-1 text-lg text-gray-700'>
                    <FaBangladeshiTakaSign />
                    {productTotal}
                </p>
            </div>

            {/* Proceed to Checkout Button */}
            <div className="mt-6">
                <Link to={'/checkout-page'}>
                    <button
                        onClick={() => console.log("Proceeding to Checkout")}
                        className={`w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${isSubtotalZero ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubtotalZero} // Disable button if subtotal is 0
                    >
                        Proceed to Checkout
                    </button>
                </Link>
            </div>
        </div>
    );
};

CartPrice.propTypes = {
    productTotal: PropTypes.string.isRequired,
};

export default CartPrice;
