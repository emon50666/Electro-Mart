import { useState, useEffect } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import CardOfCart from "./CardOfCart";
import useAuth from "../../Hooks/useAuth";


const AddCart = ({ setCartOpen }) => {
  const { user } = useAuth();
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
        className={`bg-white w-96 p-2 overflow-auto shadow-lg h-full relative transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={handleCloseCart}
          className="right-4 absolute font-semibold text-red-600"
        >
          &times; close
        </button>
        <h2 className="font-semibold text-xl mb-4 pb-2 border-b">
          Cart Details
        </h2>
        {!user ? (
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Please{" "}
              <Link to="/register" className="text-blue-500 underline">
                log in
              </Link>{" "}
              to view your cart.
            </p>
          </div>
        ) : theUserCarts.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
        ) : (
          <>
            {theUserCarts.map((cart, idx) => (
              <CardOfCart key={idx} cart={cart} />
            ))}
            <div className="space-y-3">
              <Link
                to={"/manageCart"}
                className="btn py-2 px-4 w-full border border-blue-500 hover:text-white text-blue-500 hover:bg-blue-500 font-semibold rounded-md"
              >
                View Cart
              </Link>
              <Link
                to="/checkout-page"
                className="btn py-2 px-4 w-full bg-blue-500 text-white hover:bg-blue-500 font-semibold rounded-md"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

AddCart.propTypes = {
  setCartOpen: PropType.func,
};

export default AddCart;
