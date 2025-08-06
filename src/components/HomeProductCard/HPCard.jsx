import { IoGitCompareOutline } from "react-icons/io5";
import { FaEye, FaHeart } from "react-icons/fa";
import HoverImage from "react-hover-image/build";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAddToCompare from "../../Hooks/useAddToCompare";
import useAddToWishlist from "../../Hooks/useAddToWishlist";

const HPCard = ({ product, refetch }) => {
  const handleAddCompare = useAddToCompare();
  const handleAddWishlist = useAddToWishlist();
  const axiosPublic = useAxiosPublic();

  const handleViewCount = (_id) => {
    let currentView = product?.view || 0;
    const updateView = currentView + 1;
    const viewInfo = { view: updateView };
    axiosPublic
      .patch(`/productView/${_id}`, viewInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
        }
      })
      .catch(() => {
        // console.log(Error = ${err});
      });
  };

  const handleAddToCompare = () => {
    handleAddCompare(product);
  };
  const handleAddToWishlist = () => {
    handleAddWishlist(product);
  };

  return (
    <div>
      <div className="relative shadow-sm hover:shadow-md bg-white/80 rounded-md px-2 py-2 group">
        <Link to={`/productDetails/${product._id}`}>
          {product.images.length > 1 ? (
            <HoverImage
              src={product.images[0]}
              hoverSrc={product.images[1]}
              alt="Product Image"
              onClick={() => handleViewCount(product._id)}
              className="lg:w-full h-[100px] w-[130px] lg:h-[200px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-95"
            />
          ) : (
            <img
              src={product.images[0]}
              alt="Product Image"
              onClick={() => handleViewCount(product._id)}
              className="lg:w-full h-[100px] w-[130px] lg:h-[200px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-95"
            />
          )}
        </Link>

        {/* Side Action Icons */}
        <div className="absolute top-1/3 z-30 right-4 transform -translate-y-1/2 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 opacity-0 group-hover:pointer-events-auto pointer-events-none transition-all duration-500 ease-in-out bg-white p-2 rounded-md border shadow-lg flex flex-col space-y-4">
          <button onClick={handleAddToWishlist}>
            <FaHeart className="text-lg text-blue-600" />
          </button>
          <button onClick={handleAddToCompare}>
            <IoGitCompareOutline className="text-lg text-blue-600" />
          </button>
          <Link
            to={`/productDetails/${product._id}`}
            onClick={() => handleViewCount(product._id)}
          >
            <FaEye className="text-lg text-blue-600" />
          </Link>
        </div>

        {/* Badge Section */}
        <div className="absolute top-2 left-2 flex flex-col items-start gap-1 z-10">
          {product?.isNew === "yes" && (
            <span className="bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              New
            </span>
          )}
          {product?.isHot === "yes" && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              Hot
            </span>
          )}
          {product?.discountPercentage > 1 && (
            <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              -{product?.discountPercentage}%
            </span>
          )}
        </div>
        <hr />
        {/* Product Name */}
        <Link
          to={`/productDetails/${product._id}`}
          className="mt-2 text-center block py-2"
        >
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 h-[3rem]">
            {product.title.length > 80
              ? product?.title.slice(0, 80) + "..."
              : product.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

HPCard.propTypes = {
  product: PropType.object,
  refetch: PropType.func,
};

export default HPCard;
