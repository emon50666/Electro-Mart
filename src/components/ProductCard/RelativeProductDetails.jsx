import { useState } from "react";
import HoverImage from "react-hover-image/build";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"; // Import icons

const RelativeProductDetails = ({ productsDetails }) => {
  const { image, title, rating, price,hoverImage } = productsDetails;
  const [isHovered, setIsHovered] = useState(false);

  // Function to render rating stars dynamically
  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div
      className=" my-10 relative w-60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image with zoom effect */}
        <HoverImage
        src={image} // Default image
        hoverSrc={hoverImage} // Hover image
        alt="Product Image"
        className={`transition-transform duration-300 ${
          isHovered ? "transform scale-110" : ""
        } rounded h-72 w-56`}
      />
        

        {/* Icon display on hover */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center mt-64 gap-2">
            <button className="bg-white text-orange-500 p-2 rounded-full shadow-lg hover:bg-gray-100">
              <FaShoppingCart />
            </button>
            <button className="bg-white text-orange-500 p-2 rounded-full shadow-lg hover:bg-gray-100">
              <FaSearch />
            </button>
            <button className="bg-white text-orange-500 p-2 rounded-full shadow-lg hover:bg-gray-100">
              <FaHeart />
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <h1 className="mt-3 text-lg text-center font-medium">{title}</h1>

      {/* Rating */}
      <div className="rating mt-2 flex  justify-center">{renderRating()}</div>

      {/* Price */}
      <p className="mt-1 text-blue-600 text-center font-semibold">£{price}</p>
    </div>
  );
};

export default RelativeProductDetails;
