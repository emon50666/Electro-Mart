import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaCartShopping, FaHeart, FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import HoverImage from "react-hover-image/build";
import { IoMdCloseCircle } from "react-icons/io";

const ProductCard = () => {

  const [isHovered, setIsHovered] = useState(false);


  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    setCartOpen(false);
  };


  // product quantity 
  const [quantity, setQuantity] = useState(0);


  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };


  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };





  return (
    <section className="mt-10 mb-10 bg-[#F6F6F6]">
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

          <div className="mt-3 capitalize   absolute  bottom-[310px]  md:bottom-[333px] lg:bottom-[310px] inset-x-0  px-2">
         <small className="bg-teal-500 px-2   pb-[2px] text-sm  rounded-full font-bold text-white">

          <div className="mt-3 capitalize   absolute md:bottom-[333px] lg:bottom-[310px] inset-x-0  px-2">
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

          {/* Left Side Cart Drawer */}
          {cartOpen && (
            <div className="fixed inset-0 flex items-center justify-start z-50 ">
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={handleCloseCart}
              ></div>
              <div className="bg-white w-96 p-6 overflow-auto shadow-lg h-full relative transition-transform duration-300 ease-in-out transform translate-x-0">

                <button
                  onClick={handleCloseCart}
                  className=" right-4  absolute  font-semibold  text-red-600 "

                >
                  &times;
                  close
                </button>
                <h2 className="font-semibold text-xl mb-4 pb-2 border-b ">Cart Details</h2>

                <div className="flex items-center  mb-4 ">
                  <img
                    src="https://i.ibb.co.com/NV6YQnX/macbook-pro-14-space-gray-Custom-Mac-BD-cb6c821c-c249-4d9c-8278-1a307cbbdab7.webp"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <div className="flex  gap-24">
                      <h4 className="font-semibold text-sm md:text-base mb-2">Apple MacBook 13</h4>
                      <IoMdCloseCircle className="text-2xl text-red-600"></IoMdCloseCircle>

                    </div>

                    {/* product quantity */}

                    <div className="flex   items-center space-x-4">
                      <button
                        className=" p-2 border w-8 h-10  rounded-md"
                        onClick={handleDecrement}
                        disabled={quantity <= 0}
                      >
                        <FaMinus />
                      </button>

                      <span className=" border p-2 w-8 h-10 rounded-md">{quantity}</span>

                      <button
                        className=" border p-2 w-8 h-10  rounded-md"
                        onClick={handleIncrement}
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <p className="text-sm  text-gray-500 mt-2">$1000</p>
                  </div>
                </div>
                <div className="space-y-3">
                <button
                  className="py-2 px-4 w-full bg-orange-500 text-white font-semibold rounded-md"
              
                >
                  Checkout
                </button>
                <button
                  className="py-2 px-4 w-full border border-orange-500 hover:text-white text-orange-500 hover:bg-orange-500 font-semibold rounded-md"
              
                >
                  Checkout
                </button>
               
                </div>
              </div>
            </div>
          )}
        </div>





      </div>
    </section>
  );
};

export default ProductCard;