import { FaShoppingCart } from "react-icons/fa";
import useProduct from "../../Hooks/useProduct";
import { DiGitCompare } from "react-icons/di";
import { BsEye } from "react-icons/bs";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAddToCart from "../../Hooks/useAddToCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useWishlist from "../../Hooks/useWishlist";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import useAddToCompare from "../../Hooks/useAddToCompare";

const WishlistTable = ({ wishProduct }) => {
  // console.log(wishProduct)
  const { products } = useProduct();
  const axiosPublic = useAxiosPublic();
  const { refetch } = useWishlist();
  const [, setCartOpen] = useState(false);
  const handleAddCart = useAddToCart();
  const handleAddCompare = useAddToCompare();
  const product = products.find((pack) => pack?._id == wishProduct?.mainProductId);

  const handleAddToCart = () => {
    handleAddCart(product)
    setCartOpen(true);
  };

  const handleAddToCompare = () => {
    handleAddCompare(product)
  };

  // // console.log(product)

  const handleDeleteWishlist = (id) => {

    axiosPublic.delete(`/wishlist/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
        }
      })
      .catch(err => {
        // console.log(err);
      })
  }
  return (
    <tr className="odd:bg-slate-50">
      <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <img
          src={product?.images[0]}
          alt={product?.title}
          className="lg:h-32 md:h-32 h-20 lg:w-28 md:w-24 w-16 py-3 object-contain"
        />
      </td>
      <td className="px-5 md:text-base text-xs transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <span className="block w-56 xl:w-auto">
          {product?.title}
        </span>
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        {product?.brand}
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <p className="flex items-center justify-center gap-1">
          <FaBangladeshiTakaSign />{product?.price}
        </p>
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        {(product?.discountPrice && (product?.discountPrice !== product?.price)) ? <p className="flex items-center justify-center gap-1">
          <FaBangladeshiTakaSign />{product?.discountPrice}
        </p> : "0"}
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        {
          product?.quantity <= 0 ? "Stock Out" : <>{product?.quantity}</>
        }
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <Link to={`/productDetails/${wishProduct?._id}`}>
          <button className="border-2 border-blue-500 rounded-md text-blue-500 text-lg px-4 py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
            <BsEye />
          </button>
        </Link>
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <button onClick={handleAddToCart} className="border-2 border-blue-500 rounded-md text-blue-500 text-lg px-4 py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
          <FaShoppingCart />
        </button>
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <button onClick={handleAddToCompare} className="border-2 border-blue-500 rounded-md text-blue-500 text-lg px-4 py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
          <DiGitCompare />
        </button>
      </td>
      <td className="px-5 md:text-base text-xs  text-center transition duration-300 border-t border-l first:border-l-0 border-slate-300">
        <button onClick={() => handleDeleteWishlist(wishProduct?._id)} className="border-2 border-blue-500 rounded-md text-blue-500 text-xl px-4 py-2 text-center transition-all duration-300 ease-in-out transform hover:scale-105">
          <MdDeleteForever />
        </button>
      </td>

    </tr>

  );
};

WishlistTable.propTypes = {
  wishProduct: PropType.object
}
export default WishlistTable;