import { useState, useEffect } from "react";

import PropType from "prop-types";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import CardOfCart from "./CardOfCart";

const AddCart = ({ setCartOpen }) => {
    // const { user } = UserAuth()
    const { theUserCarts } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleCloseCart = () => {
        setIsOpen(false);
        setTimeout(() => {
            setCartOpen(false);
        }, 300);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-start z-50">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={handleCloseCart}
            ></div>
            <div
                className={`bg-white w-96 p-2 overflow-auto shadow-lg h-full relative transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={handleCloseCart}
                    className="right-4 absolute font-semibold text-red-600"
                >
                    &times; close
                </button>
                <h2 className="font-semibold text-xl mb-4 pb-2 border-b">Cart Details</h2>
                {theUserCarts.map((cart, idx) => <CardOfCart key={idx} cart={cart} />)}
                <div className="space-y-3">
                    <Link to={'/dashboard/manageCart'} className="btn py-2 px-4 w-full border border-orange-500 hover:text-white text-orange-500 hover:bg-orange-500 font-semibold rounded-md">
                        View Cart
                    </Link>
                    <Link to="/dashboard/checkoutPage" className="btn py-2 px-4 w-full bg-orange-500 text-white  hover:bg-orange-500 font-semibold rounded-md">
                        Checkout
                    </Link>

                </div>
            </div>
        </div>
    );
};

AddCart.propTypes = {
    setCartOpen: PropType.func,
};

export default AddCart;
