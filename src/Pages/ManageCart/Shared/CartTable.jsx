import useCart from '../../../Hooks/useCart';
import CartTableRow from './CartTableRow';

const CartTable = () => {
    const { theUserCarts } = useCart();
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="py-2">Product</th>
                        <th className="py-2">Price</th>
                        <th className="py-2">Quantity</th>
                        <th className="py-2">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {theUserCarts.map((item) => (
                        <CartTableRow key={item.id} item={item}/>
                    ))}
                </tbody>
            </table>

            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Coupon code"
                        className="px-4 py-2 border rounded w-1/2"
                    />
                    <button className="bg-blue-500 text-white px-6 py-2 rounded">
                        Apply Coupon
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartTable;
