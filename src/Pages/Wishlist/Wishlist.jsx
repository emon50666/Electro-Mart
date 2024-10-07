import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";
import { useState } from "react";
import { FaTableCellsLarge } from "react-icons/fa6";
import { MdTableRows } from "react-icons/md";

const Wishlist = () => {
  const products = [
    {
      images: [
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1726663730/download_24_eqjgcy.jpg",
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1726663729/download_25_pur9ua.jpg",
      ],
      title: "Blender Pro 3000",
      rating: 4,
      description:
        "High-performance blender with 3 speed settings and a 2-liter jug.",
      price: 320,
      discountPrice: 270,
      discountPercentage: 15,
      availableItems: 5,
      brandName: "BlendMaster",
    },
    {
      images: [
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1726667541/download_28_kayepw.jpg",
        "https://i.ibb.co.com/sample-image6.jpg",
      ],
      title: "Stainless Steel Knife Set",
      rating: 4,
      description:
        "8-piece knife set with ultra-sharp stainless steel blades and ergonomic handles.",
      price: 80,
      discountPrice: 65,
      discountPercentage: 18,
      availableItems: 20,
      brandName: "SharpEdge",
    },
    {
      images: [
        "https://res.cloudinary.com/duv5fiurz/image/upload/v1726667567/download_29_neozxh.jpg",
        "https://i.ibb.co.com/sample-image8.jpg",
      ],
      title: "Coffee Maker Deluxe",
      rating: 3,
      description:
        "Programmable coffee maker with a 12-cup capacity and stainless steel design.",
      price: 200,
      discountPrice: 160,
      discountPercentage: 20,
      availableItems: 10,
      brandName: "BrewMaster",
    },
  ];
  const [format, setFormat] = useState("card");

  const handleFormat = (formatStyle) => {
    setFormat(formatStyle);
  };
  return (
    <div className="">
      <div className="font_lexend min-h-[30vh] h-auto md:min-h-[40vh] lg:min-h-[50vh] bg-[url('https://res.cloudinary.com/duv5fiurz/image/upload/v1726674456/page-title-shop_ue5dxm.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-semibold">
          Compare
        </h2>
        <div className="flex gap-x-1 gap-y-0 md:mt-2 text-white text-sm">
          <Link to="/" className="cursor-pointer hover:text-orange-500">
            Home
          </Link>
          <span>/</span>
          <p>Compare</p>
        </div>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between pr-10">
      <h3 className="lg:text-2xl md:text-2xl font-semibold px-10 mt-3">Your products wishlist</h3>
     
      <div className="join lg:mt-5 md:mt-5 mt-2 ">
      <button
              onClick={() => handleFormat("card")}
              className="btn join-item"
            >
              <FaTableCellsLarge />
            </button>
            <button
              onClick={() => handleFormat("table")}
              className="btn join-item"
            >
              <MdTableRows />
            </button>
           
          </div>
      
      </div>
      {format === "table" && (
  <div className="w-full overflow-x-auto mt-10 lg:px-20 ">
    <table className="w-full text-left border border-separate rounded border-slate-200" cellspacing="0">
      <thead>
        <tr>
          <th scope="col" className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100">Image</th>
          <th scope="col" className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100">Title</th>
          <th scope="col" className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100">Brand</th>
          <th scope="col" className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100">Price</th>
          <th scope="col" className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100">Discount Price</th>
          <th scope="col" className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-slate-700 bg-slate-100">Available Items</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index} className="odd:bg-slate-50">
          <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            <img
              src={product.images[0]}
              alt={product.title}
              className="lg:h-32 md:h-32 h-20 lg:w-24 md:w-24 w-16 py-3 object-cover"
            />
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            {product.title}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            {product.brandName}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            £{product.price}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            £{product.discountPrice}
          </td>
          <td className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold transition duration-300 border-t border-l first:border-l-0 border-slate-200">
            {product.availableItems}
          </td>
          <td className="h-12 px-6">
            <button className="border-2 text-black px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105">
              Buy Now
            </button>
          </td>
        </tr>
        
        ))}
      </tbody>
    </table>
  </div>
)}


     {format === "card" && (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 md:gap-10 px-5">
       {products.map((product, index) => (
         <div
           key={index}
           className="card bg-base-100 w-full sm:w-80 lg:w-96 relative group overflow-hidden"
         >
           <figure className="px-4 sm:px-6 md:px-10 pt-10">
             <img
               src={product.images[0]}
               alt={product.title}
               className="h-48 sm:h-64 md:h-72 md:w-64  lg:w-full w-52 sm:w-64 transition-transform duration-500 group-hover:scale-105"
             />
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
           <div className="flex items-center justify-between text-sm sm:text-xl px-4 sm:px-6 md:px-10 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
             <button>
               <CiHeart />
             </button>
             <button className="bg-orange-500 text-xs sm:text-sm lg:text-base px-3 sm:px-5 py-1 sm:py-2 text-white">
               Buy Now
             </button>
             <button>
               <DiGitCompare />
             </button>
           </div>
         </div>
       ))}
     </div>
     )}
    </div>
  );
};

export default Wishlist;
