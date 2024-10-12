import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaCartShopping, FaHeart, FaStar } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import HoverImage from "react-hover-image/build";
import AddCart from "../AddToCart/AddCart";
import { Link } from "react-router-dom";
import PropType from "prop-types";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAddToCart from "../../Hooks/useAddToCart";
import useAddToCompare from "../../Hooks/useAddToCompare";
import useAddToWishlist from "../../Hooks/useAddToWishlist";

const ProductCard = ({ product, refetch }) => {
  const handleAddCart = useAddToCart();
  const handleAddCompare = useAddToCompare();
  const handleAddWishlist = useAddToWishlist();
  const axiosPublic = useAxiosPublic();
  const [isHovered, setIsHovered] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleAddToCart = () => {
    handleAddCart(product)
    setCartOpen(true);
  };
  // console.log(user?.email);
  const handleViewCount = (_id) => {
    let currentView = product?.view || 0;
    const updateView = currentView + 1;
    const viewInfo = { view: updateView };
    axiosPublic.patch(`/products/${_id}`, viewInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
        }
      })
      .catch(err => {
        console.log(`Error = ${err}`);
      })
  };




  const handleAddToCompare = () => {
    handleAddCompare(product)
  }
  const handleAddToWishlist = () => {
    handleAddWishlist(product)
  }
  
  return (
    <div
      className="   pt-4 pb-3  bg-[#F6F6F6]">

      <div className="relative p-3 hover:shadow-lg rounded-md bg-white group">
        <Link to={`/productDetails/${product._id}`}>
          {product.images.length > 1 && <HoverImage
            src={product.images[0]}
            hoverSrc={product.images[1]}
            alt="Product Image"
            onClick={() => handleViewCount(product._id)}
            className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-95"
          />}


          {product.images.length <= 1 && <img
            src={product.images[0]}
            alt="Product Image"
            onClick={() => handleViewCount(product._id)}
            className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-95"
          />}

        </Link>


        <div className="absolute top-1/3 right-4 transform -translate-y-1/2 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 opacity-0 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 ease-in-out bg-white p-2 rounded-md border shadow-lg flex flex-col space-y-4">
          <button onClick={handleAddToWishlist}>
            <FaHeart className="text-lg text-orange-600" />
          </button>
          <button onClick={handleAddToCompare}>
            <IoGitCompareOutline className="text-lg text-orange-600" />
          </button>
          <Link to={`/productDetails/${product._id}`} onClick={() => handleViewCount(product._id)}>
            <FaEye className="text-lg text-orange-600" />
          </Link>
        </div>


        {product?.discountPercentage > 1 && <div className="mt-3 capitalize   text-end absolute -top-4 inset-x-0  px-2">
          <small className="bg-orange-500 px-2   py-[1px] text-sm rounded-full font-bold text-white">
            -{product?.discountPercentage}%
          </small>
        </div>}
        <div className="mt-3 capitalize   absolute bottom-[310px]  md:bottom-[320px] lg:bottom-[310px] inset-x-0  px-2">
          {product?.isNew === "yes" && <small className="bg-teal-500 px-2   pb-[2px] text-sm  rounded-full font-bold text-white">
            New
          </small>
          }
          <br />
          {product?.isHot === "yes" && <small className="bg-red-500 px-2   pb-[2px] text-sm  rounded-full font-bold text-white">
            Hot
          </small>}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <Link to={`/productDetails/${product._id}`}><h4 className="font-semibold text-base capitalize">{product?.title.slice(0, 10)} [...]</h4></Link>
            <small className="text-gray-400 text-md capitalize font-semibold">{product?.brand}</small>
          </div>
          <span className="flex items-center gap-1 font-semibold mb-4">
            <FaStar className="text-orange-500" /> 4.7
          </span>
        </div>

        {product?.discountPrice == product?.price ? <div className="flex gap-2">
          <p className="font-bold text-orange-500"> ৳ {product?.price}</p>
        </div>
          :
          product?.discountPrice > 1 ? <div className="flex gap-2">
            <span className="line-through text-gray-400 font-semibold"> ৳{product?.price}</span>
            <p className="font-bold text-orange-500">{product?.discountPrice}</p>
          </div>
            :
            <div className="flex gap-2">
              <p className="font-bold text-orange-500"> {product?.price}</p>
            </div>
        }

        <button
          className="py-2 font-semibold px-4 bg-[#FF5E2B] mt-4 text-white rounded flex items-center justify-center relative overflow-hidden"
          onClick={handleAddToCart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ height: '2.5rem', width: '100%' }}
        >
          <span
            className={`absolute transition-all flex gap-3 duration-300 ease-in-out ${isHovered ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
          >
            <FaCartShopping className="items-center mt-1" /> Add to Cart
          </span>
          <BsCart
            size={20}
            className={`absolute transition-all duration-300 ease-in-out ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
          />
        </button>
        {cartOpen && <AddCart setCartOpen={setCartOpen} />}
      </div>

    </div>
  );
};
ProductCard.propTypes = {
  product: PropType.object,
  refetch: PropType.func,
}

export default ProductCard;

