import { DiGitCompare } from "react-icons/di";
import { FaShoppingCart } from "react-icons/fa";
import useProduct from "../../Hooks/useProduct";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import useAddToCart from "../../Hooks/useAddToCart";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useWishlist from "../../Hooks/useWishlist";

const WishlistCart = ({ wishProduct }) => {
  const { products } = useProduct();
  const { refetch } = useWishlist();
  const axiosPublic = useAxiosPublic();

  const [, setCartOpen] = useState(false);
  const handleAddCart = useAddToCart();
  const handleAddToCart = () => {
    handleAddCart(product);
    setCartOpen(true);
  };
  const product = products.find(
    (pack) => pack?._id == wishProduct?.mainProductId
  );

  const handleDeleteWishlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
  }).then((result) => {
      if (result.isConfirmed) {
          axiosPublic.delete(`/wishlist/${id}`)
              .then((res) => {
                  if (res.data.deletedCount) {
                      refetch();
                  }
              })
              .catch(err => {
                  console.log(err);
              })
      }
  });
}
  return (
    <div className="card bg-base-100 w-full sm:w-80 lg:w-96 relative group border-2 overflow-hidden">
      <button onClick={() => handleDeleteWishlist(wishProduct?._id)} className="flex items-center ml-3 lg:mr-56 md:mr-44 mr-32 mt-2 gap-x-1 text-sm  p-1 hover:bg-gray-100 hover:text-orange-500 hover:px-7 hover:font-medium rounded-sm transition-all">
        <RxCross1 /> <span>Remove</span>
      </button>
      <figure className="px-4 sm:px-6 md:px-10 pt-10">
        <Link to={`/productDetails/${product?._id}`}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-48 sm:h-64 md:h-72 md:w-64  lg:w-full w-52 sm:w-64 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xs sm:text-sm lg:text-lg">
          {product.title}
        </h2>
        <p className="text-orange-500 text-xs sm:text-sm lg:text-base">
          £{product.price}
        </p>
      </div>

      {/* Description (hidden by default, shown on hover) */}
      <p className="-mt-7 px-4 sm:px-6 md:px-10 text-xs sm:text-sm lg:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {product.description}
      </p>

      {/* Buttons (hidden by default, shown on hover, positioned after description) */}
      <div className="flex items-center justify-between text-sm sm:text-xl mb-2  px-4 sm:px-6 md:px-10 mt-4 ">
        <button onClick={handleAddToCart} className="text-2xl text-orange-500">
          <FaShoppingCart />
        </button>
        <button className="bg-orange-500 text-xs sm:text-sm lg:text-base px-3 sm:px-5 py-1 sm:py-2 text-white">
          Buy Now
        </button>
        <button className="text-2xl text-orange-500">
          <DiGitCompare />
        </button>
      </div>
    </div>
  );
};

WishlistCart.propTypes = {
  wishProduct: PropType.object,
};

export default WishlistCart;
