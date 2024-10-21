import PropType from 'prop-types';
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CartPrice = ({ productTotal }) => {
    return (
        <div className='h-full border-2 border-slate-400 p-8 rounded-lg font_lexend'>
            <h2 className="text-2xl font-semibold">Carts Total</h2>
            <div className='flex justify-between items-center mt-5 border-b border-slate-300 pb-2'>
                <h4 className="font-semibold text-lg">Subtotal</h4>
                <p className='flex items-center gap-1 text-lg text-thin text-gray-400'>
                    <FaBangladeshiTakaSign />
                    {productTotal}
                </p>
            </div>
            <div className='border-b border-slate-300 pb-2'>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span>
                            <span className="label-text">Flat rate: </span>
                            <span className="label-text text-blue-600">150</span>
                        </span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span>
                            <span className="label-text">Free shipping: </span>
                            <span className="label-text text-blue-600">150</span>
                        </span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span>
                            <span className="label-text">Local pickup: </span>
                            <span className="label-text text-blue-600">150</span>
                        </span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
                    </label>
                </div>
            </div>
        </div>
    );
};
CartPrice.propTypes = {
    productTotal: PropType.string
}
export default CartPrice;