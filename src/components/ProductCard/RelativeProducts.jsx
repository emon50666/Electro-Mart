import HoverImage from "react-hover-image"; // Correct import
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useProduct from "../../Hooks/useProduct";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RelativeProducts = ({ category, productId }) => {
  const { products } = useProduct();
  const { reviews } = useReview();

  // Function to render rating stars dynamically using React Icons
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-gray-300" />
          ))}
      </>
    );
  };

  // Filter products by category and exclude the current product
  const catPro = products.filter(
    (product) => product.category === category && product._id !== productId
  );

  return (
    <div className="relative-products-container px-4">
      {catPro.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold">Related Products</h3>
        </div>
      )}

      <Swiper
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
        centeredSlides={false}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {catPro.map((product) => {
          // Filter reviews matching the product's _id with review's mainId
          const productReviews = reviews.filter(
            (review) => review.mainId === product._id
          );

          // Calculate average rating for the product
          const averageRating =
            productReviews.length > 0
              ? productReviews.reduce((sum, review) => sum + review.rating, 0) /
                productReviews.length
              : 0;

          return (
            <SwiperSlide key={product._id} className="h-full">
              <div className="relative mt-5 mb-10 w-full sm:w-64 lg:w-72 group border-2 border-slate-300 py-5 rounded-md">
                <div className="relative h-[200px]">
                  {product.images.length > 1 ? (
                    <Link to={`/productDetails/${product._id}`}>
                      <HoverImage
                        src={product.images[0]}
                        hoverSrc={product.images[1]}
                        alt="Product Image"
                        className="w-full h-[200px] object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-95"
                      />
                    </Link>
                  ) : (
                    <Link to={`/productDetails/${product._id}`}>
                      <img
                        src={product.images[0]}
                        alt="Product Image"
                        className="w-full h-[200px] object-contain transition-transform duration-500 ease-in-out transform group-hover:scale-95"
                      />
                    </Link>
                  )}
                </div>

                {/* Product Details */}
                <h1 className="mt-3 text-lg text-center font-medium">
                  {product.title.slice(0, 22)}...
                </h1>

                {/* Average Rating */}
                <div className="rating mt-2 flex justify-center items-center space-x-1">
                  {renderRating(averageRating)}
                </div>

                {/* Price */}
                <p className="mt-1 text-blue-600 text-center font-semibold">
                  £{product.price}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

RelativeProducts.propTypes = {
  category: PropType.string,
  productId: PropType.string,
};

export default RelativeProducts;
