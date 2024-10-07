
import { FaHome, FaThList, FaShoppingCart } from 'react-icons/fa'; // Importing icons from react-icons

const BottomNavigation = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
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

        {/* Cart Icon */}
        <div className="relative flex flex-col items-center text-gray-600">
          <FaShoppingCart className="text-2xl" />
          <span className="text-xs">Cart</span>
          {/* Badge for cart items count */}
          <span className="absolute -top-2 -right-1 bg-orange-500 text-white text-xs rounded-full px-1 py-0.5">
            9+
          </span>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;
