import { useEffect, useState } from "react";
import HoverImage from "react-hover-image/build";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa"; // Import icons
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RelativeProducts = () => {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Fetch product data
    fetch("relatedProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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

  return (
    <div className="relative-products-container px-4">
      <Swiper
        slidesPerView={1} // Default for mobile
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        breakpoints={{
          // For devices with width >= 640px (tablet)
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // For devices with width >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          // For large desktops
          1280: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div
              className="relative mx-auto my-10 w-full sm:w-64 lg:w-72"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                {/* Image with hover effect */}
                <HoverImage
                  src={product.image} // Default image
                  hoverSrc={product.hoverImage} // Hover image
                  alt="Product Image"
                  className={`transition-transform duration-300 ${
                    hoveredIndex === index ? "transform scale-110" : ""
                  } rounded object-cover h-[320px] w-64 ml-3 p-5`} // Ensure the image covers and is centered
                />

                {/* Icon display on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center mt-56 md:ml-4 gap-2">
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
              <h1 className="mt-3 text-lg text-center font-medium">{product.title}</h1>

              {/* Rating */}
              <div className="rating mt-2 flex justify-center">{renderRating(product.rating)}</div>

              {/* Price */}
              <p className="mt-1 text-blue-600 text-center font-semibold">£{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelativeProducts;
