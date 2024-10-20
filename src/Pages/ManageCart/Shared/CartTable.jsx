import { useState } from 'react';
import useCart from '../../../Hooks/useCart';

const CartTable = () => {
    const { theUserCarts } = useCart();

    const updateQuantity = (id, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const calculateSubtotal = (price, quantity) => (price * quantity).toFixed(2);

    const handleRemove = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

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
                        <tr key={item.id} className="border-b">
                            <td className="py-4 flex items-center">
                                <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                                <span>{item.name}</span>
                            </td>
                            <td className="py-4">${item.price.toFixed(2)}</td>
                            <td className="py-4">
                                <div className="flex items-center">
                                    <button
                                        className="px-2 py-1 border rounded"
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 border rounded"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="py-4">${calculateSubtotal(item.price, item.quantity)}</td>
                            <td className="py-4 text-red-500 cursor-pointer" onClick={() => handleRemove(item.id)}>✕</td>
                        </tr>
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
