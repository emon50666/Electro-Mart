import { useState, useEffect } from "react";

import { IoMdCloseCircle } from "react-icons/io";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const AddCart = ({ setCartOpen }) => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, []);

   
    const handleCloseCart = () => {
        // Close the sidebar smoothly before unmounting
        setIsOpen(false);
        setTimeout(() => {
            setCartOpen(false);
        }, 300); // Delay to match the transition duration
    };

    return (
        <div className="fixed inset-0 flex items-center justify-start z-50">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={handleCloseCart}
            ></div>
            <div
                className={`bg-white w-96 p-6 overflow-auto shadow-lg h-full relative transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={handleCloseCart}
                    className="right-4 absolute font-semibold text-red-600"
                >
                    &times; close
                </button>
                <h2 className="font-semibold text-xl mb-4 pb-2 border-b">Cart Details</h2>
                <div className="flex items-center mb-4">
                    <img
                        src="https://i.ibb.co.com/NV6YQnX/macbook-pro-14-space-gray-Custom-Mac-BD-cb6c821c-c249-4d9c-8278-1a307cbbdab7.webp"
                        alt="Product"
                        className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4">
                        <div className="flex gap-24">
                            <h4 className="font-semibold text-sm md:text-base mb-2">
                                Apple MacBook 13
                            </h4>
                            <IoMdCloseCircle className="text-2xl text-red-600"></IoMdCloseCircle>
                        </div>
                     
                        <p className="text-sm text-gray-500 mt-2">$1000</p>
                    </div>
                </div>
                <div className="space-y-3">
                <button className="py-2 px-4 w-full border border-orange-500 hover:text-white text-orange-500 hover:bg-orange-500 font-semibold rounded-md">
                        View Cart
                    </button>
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
