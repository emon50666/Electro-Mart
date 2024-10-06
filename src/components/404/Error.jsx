import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Optional, you can add custom icons

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 shadow-md rounded-md">
        {/* Error Heading */}
        <h1 className="text-7xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Oops! Page not found
        </h2>
        
        {/* Illustration or Icon */}
        <div className="flex justify-center items-center">
          <FaShoppingCart className="text-6xl text-orange-500 mb-6" />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base mb-8">
          The page you're looking for doesn't exist or was moved. 
        </p>

        {/* Back to Home Button */}
        <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
