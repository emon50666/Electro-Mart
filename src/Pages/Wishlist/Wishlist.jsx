import { Link } from "react-router-dom";
import { FaTableCellsLarge } from "react-icons/fa6";
import { useState } from "react";
import { MdTableRows } from "react-icons/md";

import WishlistTable from "./WishlistTable";
import useWishlist from "../../Hooks/useWishlist";
import WishlistCart from "./WishlistCart";

const Wishlist = () => {
  const { theUserWishlist } = useWishlist();
  // console.log(theUserWishlist)
  // console.log(products)

  const [format, setFormat] = useState("card");

  const handleFormat = (formatStyle) => {
    setFormat(formatStyle);
  };
  return (
    <div className="">
      {theUserWishlist.length > 0 && (
        <div className="font_lexend min-h-[30vh] h-auto md:min-h-[40vh] lg:min-h-[50vh] relative bg-[url('https://res.cloudinary.com/dpsgtszzi/image/upload/v1734188066/wish_zs7hew.jpg')] bg-cover  flex flex-col items-center justify-center">
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-gray-100 font-semibold">
              Wishlist
            </h2>
            <div className="flex items-center gap-x-1 md:mt-2 text-white text-sm">
              <Link to="/" className="cursor-pointer hover:text-blue-600">
                Home
              </Link>
              <span>/</span>
              <p>Wishlist</p>
            </div>
          </div>
        </div>
      )}

      {theUserWishlist.length > 0 ? (
        <>
          <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:px-20 pr-10">
            <h3 className="lg:text-2xl md:text-2xl font-semibold px-10 mt-3">
              Your wishlist products
            </h3>

            <div className="join border border-dotted border-blue-500 py-1 px-4 gap-6  lg:mt-5 md:mt-5 mt-2 ">
              <button
                onClick={() => handleFormat("card")}
                className="text-blue-500  join-item lg:text-[30px] text-sm"
              >
                <FaTableCellsLarge />
              </button>
              <button
                onClick={() => handleFormat("table")}
                className=" text-blue-500 join-item lg:text-[30px] text-sm"
              >
                <MdTableRows />
              </button>
            </div>
          </div>
          {format === "table" && (
            <div className="w-full overflow-x-auto lg:px-20 ">
              <table
                className="w-full text-left border border-separate rounded border-slate-200 my-16"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Cart
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Compare
                    </th>
                    <th
                      scope="col"
                      className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {theUserWishlist.map((wishProduct, index) => (
                    <WishlistTable key={index} wishProduct={wishProduct} />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {format === "card" && (
            <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-y-10 px-20">
              {theUserWishlist.map((wishProduct, index) => (
                <WishlistCart key={index} wishProduct={wishProduct} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[50vh] mx-2 my-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-black p-8 md:p-10 lg:p-12 rounded-xl shadow-lg max-w-lg mx-auto space-y-8">
              <p className="text-lg md:text-3xl font-semibold">
                Your Wishlist is empty!
              </p>
              <p className="text-base md:text-lg text-gray-600">
                Start adding products to your wishlist to view them here. Check
                out our collections to find the best options for you.
              </p>
              <Link
                to="/"
                className="mt-6 inline-block text-white bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-full font-medium shadow-md hover:shadow-lg"
              >
                Go back to Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
