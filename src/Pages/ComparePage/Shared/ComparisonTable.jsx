import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useCompare from "../../../Hooks/useCompare";
import useAddToCart from "../../../Hooks/useAddToCart";
// import useAuth from '../../../Hooks/useAuth';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useReview from "../../../Hooks/useReview";

const ComparisonTable = ({ compares }) => {
  // const { user } = useAuth()
  const axiosPublic = useAxiosPublic();
  const handleAddCart = useAddToCart();
  const { refetch } = useCompare();
  const sliceTitle = (title) => {
    return title.length > 25 ? `${title.slice(0, 25)}...` : title;
  };
  const { reviews } = useReview();

  // Function to calculate average rating
  const calculateAverageRating = (productId) => {
    const productReviews = reviews.filter(
      (review) => review.mainId === productId
    );
    if (productReviews.length === 0) return 0;
    const totalRating = productReviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return totalRating / productReviews.length;
  };

  const handleDeleteCompare = (id) => {
    axiosPublic
      .delete(`/compares/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
        }
      })
      .catch(() => {
        // console.log(err);
      });
  };

  const handleAddToCart = (productId) => {
    const newPro = {
      _id: productId,
    };
    handleAddCart(newPro);
  };

  return (
    <div className="overflow-x-auto ml-0 md:ml-10 xl:ml-32">
      <table className="md:min-w-[70vw] w-full md:w-auto border-collapse border-r-0">
        <tbody>
          <tr>
            <td className=""></td>
            {compares.map((product, index) => (
              <td
                key={index}
                className="pt-0 border-b border-l border-r-0 font_cabin"
              >
                <span className="p-4 w-56 md:min-w-52 md:w-auto block">
                  <button
                    onClick={() => handleDeleteCompare(product?._id)}
                    className="flex items-center gap-x-1 text-sm mb-2 p-1 hover:bg-gray-100 hover:text-blue-500 hover:px-10 hover:font-medium rounded-sm transition-all"
                  >
                    <RxCross1 /> <span>Remove</span>
                  </button>
                  <div className="flex flex-col items-center">
                    <img
                      src={product?.image}
                      alt={product?.title}
                      className="md:w-full h-[200px] rounded-md object-contain transition-transform duration-500 ease-in-out group-hover:scale-95"
                    />
                  </div>
                  <p className="text-[#767676]">{sliceTitle(product?.title)}</p>
                  <p className="text-blue-500 flex items-center">
                    <FaBangladeshiTakaSign />
                    <span>{product?.price}</span>
                  </p>
                  <div className="flex flex-col md:flex-row md:justify-between mt-2 gap-y-1">
                    <button
                      onClick={() => handleAddToCart(product?.mainProductId)}
                      className="bg-blue-500 hover:bg-teal-500 focus:ring-2 focus:ring-teal-300 hover:ring-2 hover:ring-teal-300 transition-all text-white py-2 px-1 md:px-4 text-sm rounded-md cursor-pointer"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={`/productDetails/${product?.mainProductId}`}
                      className="text-center bg-blue-500 hover:bg-teal-500 focus:ring-2 focus:ring-teal-300 hover:ring-2 hover:ring-teal-300 transition-all text-white py-2 px-2 md:px-4 rounded-md text-sm cursor-pointer"
                    >
                      Details
                    </Link>
                  </div>
                </span>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border border-x-0 font-semibold text-[#555] ">
              Rating
            </td>
            {compares.map((product, index) => {
              const averageRating = calculateAverageRating(
                product?.mainProductId
              );
              return (
                <td
                  key={index}
                  className="border-b border-l border-r-0 font-medium text-[#767676]"
                >
                  <span className="px-4 py-2 w-56 md:w-52 flex gap-x-1">
                    {/* Show Average Rating */}
                    {[...Array(5)].map((_, i) => {
                      if (i < Math.floor(averageRating)) {
                        return (
                          <FaStar key={i} className="text-yellow-500 text-xl" />
                        );
                      } else if (i < averageRating) {
                        return (
                          <FaStarHalfAlt
                            key={i}
                            className="text-yellow-500 text-xl"
                          />
                        );
                      } else {
                        return (
                          <FaRegStar
                            key={i}
                            className="text-yellow-500 text-xl"
                          />
                        );
                      }
                    })}
                  </span>
                </td>
              );
            })}
          </tr>
          <tr>
            <td className="p-4 border-b border-r-0 font-semibold text-[#555] ">
              Brand
            </td>
            {compares.map((product, index) => (
              <td
                key={index}
                className="border-b border-l border-r-0 font-medium text-[#767676]"
              >
                <p className="p-4 w-56 md:w-52">{product?.brand}</p>
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-4 border-b border-r-0 font-semibold text-[#555] ">
              Available Items
            </td>
            {compares.map((product, index) => (
              <td
                key={index}
                className="border-b border-l border-r-0 font-medium text-[#767676]"
              >
                <p className="p-4 w-56 md:w-52">{product?.quantity}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// PropTypes validation
ComparisonTable.propTypes = {
  compares: PropTypes.array.isRequired,
};

export default ComparisonTable;
