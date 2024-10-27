
import { FaHome, FaThList, FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importing icons from react-icons
import useCart from '../Hooks/useCart';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  const { theUserCarts } = useCart();
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white z-30 shadow-lg border-t border-gray-200">
      <nav className="flex justify-between items-center h-16 px-4">
        {/* Home Icon */}
        <div className="flex flex-col items-center text-gray-600">
          <FaHome className="text-2xl" />
          <span className="text-xs">Home</span>
        </div>

        {/* Category Icon */}
        <div className="flex flex-col items-center text-gray-600">
          <FaThList className="text-2xl" />
          <span className="text-xs">Category</span>
        </div>
        {/* Category Icon */}
        <div className="flex flex-col items-center text-gray-600">
          <FaSearch className="text-2xl" />
          <span className="text-xs">Search</span>
        </div>

        {/* Cart Icon */}
        <Link to={'/manageCart'} className="relative flex flex-col items-center text-gray-600">
          <FaShoppingCart className="text-2xl" />
          <span className="text-xs">Cart</span>
          {/* Badge for cart items count */}
          {
            theUserCarts.length > 0 && (
              <span className="absolute -right-2 -ml-1 -top-2 rounded-full bg-blue-500 px-1 py-[1px] text-[10px] text-white">
                {theUserCarts.length + '+'}
              </span>
            )
          }
        </Link>
      </nav>
    </div>
  );
};

export default BottomNavigation;
