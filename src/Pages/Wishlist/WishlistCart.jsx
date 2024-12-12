import { DiGitCompare } from "react-icons/di";
import { FaShoppingCart } from "react-icons/fa";
import useProduct from "../../Hooks/useProduct";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import useAddToCart from "../../Hooks/useAddToCart";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useWishlist from "../../Hooks/useWishlist";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAddToCompare from "../../Hooks/useAddToCompare";

const WishlistCart = ({ wishProduct }) => {
  const { products } = useProduct();
  const { refetch } = useWishlist();
  const axiosPublic = useAxiosPublic();
  const [, setCartOpen] = useState(false);
  const handleAddCart = useAddToCart();
  const handleAddCompare = useAddToCompare();
  const product = products.find(
    (pack) => pack?._id === wishProduct?.mainProductId
  );
  const handleAddToCart = () => {
    handleAddCart(product);
    setCartOpen(true);
  };

  const handleAddToCompare = () => {
    handleAddCompare(product)
  };


  const handleDeleteWishlist = (id) => {
    axiosPublic
      .delete(`/wishlist/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div
      className="card bg-white shadow-lg w-full sm:w-64 md:w-80 rounded-lg overflow-hidden relative group border transition-transform duration-300 transform hover:scale-105"
    >
      {/* Remove Button */}
      <button
        onClick={() => handleDeleteWishlist(wishProduct?._id)}
        className="absolute z-50 top-3 right-3 text-gray-500 hover:text-red-500 transition-colors duration-300"
      >
        <RxCross1 className="w-5 h-5" />
      </button>

      {/* Image */}
      <Link to={`/productDetails/${product?._id}`} className="block relative">
        <img
          src={product?.images[0]}
          alt={product?.title}
          className="w-full h-48 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Title and Price */}
      <div className="px-4 py-2 text-center">
        <h2 className="font-semibold text-sm sm:text-base overflow-hidden text-ellipsis whitespace-nowrap">
          {product?.title}
        </h2>
        <p className="text-blue-500 font-bold text-sm lg:text-lg flex items-center  gap-1">
          <FaBangladeshiTakaSign />
          {product?.price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between px-4 py-2 border-t mt-2">
        <button
          onClick={handleAddToCart}
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          <FaShoppingCart className="w-5 h-5" />
        </button>

        <button
          onClick={handleAddToCompare}
          className="text-blue-500 hover:text-blue-600 transition-colors">
          <DiGitCompare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

WishlistCart.propTypes = {
  wishProduct: PropType.object,
};

export default WishlistCart;
