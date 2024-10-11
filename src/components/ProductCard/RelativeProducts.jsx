import HoverImage from "react-hover-image"; // Correct import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useProduct from "../../Hooks/useProduct";
import { useState } from "react";
import PropType from "prop-types"
import { GoGitCompare } from "react-icons/go";
import useAddToCompare from "../../Hooks/useAddToCompare";
import useAddToCart from "../../Hooks/useAddToCart";
import { Link } from "react-router-dom";

const RelativeProducts = ({ category, productId }) => {
  const { products } = useProduct();
  const handleAddCompare = useAddToCompare()
  const handleAddCart = useAddToCart()
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to render rating stars dynamically
  const renderRating = (rating) => {
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
  const handleAddToCart = (product) => {
    handleAddCart(product)
  }

  const handleAddToCompare = (product) => {
    handleAddCompare(product)
  }

  return (
    <div className="relative-products-container px-4">
      <Swiper
        // Setting dynamic slides based on viewport width using breakpoints
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        centeredSlides={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <div key={index}>
            {(product?.category == category && product?._id !== productId) && (
              <SwiperSlide className="h-full">
                {/* Added a fixed height to the slide container */}
                <div
                  className="relative my-10 w-full sm:w-64 lg:w-72 group border-2 border-slate-300 py-5 rounded-md h-[400px]" // Set a fixed height for uniformity
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-[200px]"> {/* Fixed height for the image container */}
                    {product.images.length > 1 ? (
                      <Link to={`/productDetails/${product?._id}`}><HoverImage
                        src={product.images[0]}
                        hoverSrc={product.images[1]}
                        alt="Product Image"
                        className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-95"
                      /></Link>
                    ) : (
                      <Link to={`/productDetails/${product?._id}`}> <img
                        src={product.images[0]}
                        alt="Product Image"
                        className="w-full h-full object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-95"
                      />
                      </Link>
                    )}
                  </div>

                  {/* Icons container moved under the image */}
                  <div className={`flex justify-center gap-2 mt-4 transition-opacity duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}>
                    <button onClick={() => handleAddToCart(product)} className="bg-white text-orange-500 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <FaShoppingCart />
                    </button>
                    <button onClick={() => handleAddToCompare(product)} className="bg-white text-orange-500 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <GoGitCompare />
                    </button>
                    <button className="bg-white text-orange-500 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <FaHeart />
                    </button>
                  </div>

                  {/* Product Details */}
                  <h1 className="mt-3 text-lg text-center font-medium">{product.title}</h1>

                  {/* Rating */}
                  <div className="rating mt-2 flex justify-center">
                    {renderRating(product.rating) || 0}
                  </div>

                  {/* Price */}
                  <p className="mt-1 text-blue-600 text-center font-semibold">£{product.price}</p>
                </div>
              </SwiperSlide>
            )}

          </div>
        ))}
      </Swiper>
    </div>
  );
};
RelativeProducts.propTypes = {
  category: PropType.string,
  productId: PropType.string,
}
export default RelativeProducts;
