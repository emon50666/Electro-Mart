import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaCartShopping, FaHeart, FaStar } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import HoverImage from "react-hover-image/build";
import AddCart from "../AddToCart/AddCart";

const ProductCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleAddToCart = () => {
    setCartOpen(true);
  };

  return (
    <section className="pt-10 mb-10 pb-10  bg-[#F6F6F6]">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-5 gap-3  px-10">
        <div className="relative p-3 hover:shadow-lg rounded-md bg-white group">
          <HoverImage
            src="https://i.ibb.co.com/NV6YQnX/macbook-pro-14-space-gray-Custom-Mac-BD-cb6c821c-c249-4d9c-8278-1a307cbbdab7.webp"
            hoverSrc="https://i.ibb.co/3Y7tnwc/641dbb9b4ab9f.jpg"
            alt="Product Image"
            className="w-full h-[200px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-95"
          />


          <div className="absolute top-1/3 right-4 transform -translate-y-1/2 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 opacity-0 group-hover:pointer-events-auto pointer-events-none transition-all duration-300 ease-in-out bg-white p-2 rounded-md border shadow-lg flex flex-col space-y-4">
            <FaHeart className="text-lg text-orange-600" />
            <IoGitCompareOutline className="text-lg text-orange-600" />
            <FaEye className="text-lg text-orange-600" />
          </div>


          <div className="mt-3 capitalize   text-end absolute -top-4 inset-x-0  px-2">
            <small className="bg-orange-500 px-2   py-[1px] text-sm rounded-full font-bold text-white">
              -10%
            </small>
          </div>
          <div className="mt-3 capitalize   absolute bottom-[310px]  md:bottom-[333px] lg:bottom-[310px] inset-x-0  px-2">
            <small className="bg-[rgb(67,142,68)] px-2   pb-[2px] text-sm  rounded-full font-bold text-white">
              New
            </small> <br />
            <small className="bg-red-500 px-2   pb-[2px] text-sm  rounded-full font-bold text-white">
              Hot
            </small>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-base capitalize">Apple MacBook 13 [...]</h4>
              <small className="text-gray-400 text-md capitalize font-semibold">Apple MacBook</small>
            </div>
            <span className="flex items-center gap-1 font-semibold mb-4">
              <FaStar className="text-orange-500" /> 4.7
            </span>
          </div>

          <div className="flex gap-2">
            <span className="line-through text-gray-400 font-semibold">$1230</span>
            <p className="font-bold text-orange-500">$1000</p>
          </div>

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
    </section>
  );
};


export default ProductCard;

