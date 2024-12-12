import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const BottomNavigation = () => {
  const { theUserCarts } = useCart();
  const { loading } = useAuth();
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white z-30 shadow-lg border-t border-gray-200">
      <nav className="flex justify-between items-center h-16 px-4">
        {/* Home Icon */}
        <Link to="/" className="flex flex-col items-center text-gray-600">
          <FaHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </Link>

        {/* Category Icon */}
        <Link
          to={"/shop-page"}
          className="flex flex-col items-center text-gray-600"
        >
          <FaShop className="text-2xl" />
          <span className="text-xs">Shop</span>
        </Link>
        {/* Cart Icon */}
        <Link
          to={"/manageCart"}
          className="relative flex flex-col items-center text-gray-600"
        >
          <FaShoppingCart className="text-2xl" />
          <span className="text-xs">Cart</span>
          {/* Badge for cart items count */}
          {!loading && theUserCarts.length > 0 && (
            <span className="absolute -right-1 -ml-1 -top-2 h-4 w-4 rounded-full bg-blue-500 px-1 py-0 text-[10px] text-white flex items-center justify-center">
              {theUserCarts.length >= 9 ? "9+" : theUserCarts.length}
            </span>
          )}
        </Link>
        {/* Category Icon */}
        <div className="flex flex-col items-center text-gray-600">
         
          <span className="text-xs"></span>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;
