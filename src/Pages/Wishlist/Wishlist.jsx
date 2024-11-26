import { Link } from "react-router-dom";
import { FaTable } from "react-icons/fa";
import { useState } from "react";
import { MdTableRows } from "react-icons/md";
import useProduct from "../../Hooks/useProduct";
import WishlistTable from "./WishlistTable";
import useWishlist from "../../Hooks/useWishlist";
import WishlistCart from "./WishlistCart";

const Wishlist = () => {
  const { products } = useProduct();
  const{theUserWishlist} = useWishlist()
  // console.log(theUserWishlist)
  // console.log(products)


  const [format, setFormat] = useState("card");
  

  const handleFormat = (formatStyle) => {
    setFormat(formatStyle);
  };
  return (
    <div className="">
      <div className="font_lexend min-h-[30vh] h-auto md:min-h-[40vh] lg:min-h-[50vh] bg-[url('https://res.cloudinary.com/duv5fiurz/image/upload/v1726674456/page-title-shop_ue5dxm.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-semibold">
          Wishlist
        </h2>
        <div className="flex gap-x-1 gap-y-0 md:mt-2 text-white text-sm">
          <Link to="/" className="cursor-pointer hover:text-blue-500">
            Home
          </Link>
          <span>/</span>
          <p>Wishlist</p>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between lg:px-20 pr-10">
        <h3 className="lg:text-2xl md:text-2xl font-semibold px-10 mt-3">
          Your  wishlist products
        </h3>

        <div className="join lg:mt-5 md:mt-5 mt-2 ">
          <button
            onClick={() => handleFormat("card")}
            className="btn join-item lg:text-xl text-sm"
          >
            <FaTable />
          </button>
          <button
            onClick={() => handleFormat("table")}
            className="btn join-item lg:text-2xl text-sm"
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
              {theUserWishlist.map((wishProduct, index) => <WishlistTable key={index} wishProduct={wishProduct} />           )}
            </tbody>
          </table>
        </div>
      )}

      {format === "card" && (
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-y-10 px-20">
           {theUserWishlist.map((wishProduct, index) => <WishlistCart key={index} wishProduct={wishProduct} />           )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;