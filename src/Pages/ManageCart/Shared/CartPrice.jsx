import PropType from 'prop-types';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CartPrice = ({ productTotal }) => {
    return (
        <div className='h-full border-2 border-slate-400 p-8 rounded-lg font_lexend'>
            <h2 className="text-2xl font-semibold">Carts Total</h2>
            <div className='flex justify-between items-center mt-5'>
                <h4 className="font-semibold text-lg">Subtotal</h4>
                <p className='flex items-center gap-1 text-lg text-thin text-gray-400'>
                    <FaBangladeshiTakaSign />
                    {productTotal}
                </p>
            </div>
        </div>
    );
};
CartPrice.propTypes = {
    productTotal: PropType.string
}
export default CartPrice;