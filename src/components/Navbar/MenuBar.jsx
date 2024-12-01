import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";


import Loader from "../Loader/Loader";
import useCategory from "../../Hooks/useCategory";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const { category:categories,isLoading } = useCategory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat); // Update selected category state
    
  };
  
  if (isLoading) return <Loader />;
  return (

    <div className="navbar  hidden lg:flex   bg-[#030c35]  sm:hidden md:hidden ">

    <div className="navbar hidden lg:flex  overflow-y-auto text-white sm:hidden md:hidden ">

      {/* All Category Hover Section */}
      <div
        className=" relative  px-2 "
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Toggle Button */}
        <div>
          <button className="bg-blue-600 pt-1 pb-1 pl-3 pr-3   flex items-center rounded-full text-gray-100 text-md font-medium"> All Category <IoIosArrowUp className="items-center pt-1 text-2xl
           font-bold"></IoIosArrowUp> </button>
        </div>

        {/* Responsive Full-Height Category Menu */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full lg:w-64 bg-white min-h-screen overflow-hidden shadow-lg p-4 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Close Icon */}
          <div
            className="absolute top-2 left-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes className="text-xl text-blue-500" />
          </div>

          {/* Menu Items */}
          <ul className="menu-vertical space-y-2 mt-5 pt-16 ">
          {categories.map((cat, idx) =>
              cat && (
                <li key={idx}>
                  <Link
                    to={`/shop-page?category=${cat}`} 
                    className={`text-md font-medium  text-black   px-2 py-1 hover:bg-white hover:text-blue-500 ${selectedCategory === cat ? "text-blue-600" : "text-black"}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              )
            )}

        </ul>
        </div>
      </div>

      {/* lg menu */}


<div>

     
</div>

      <div>
      <ul className=" menu-horizontal px-1 space-x-2">
            {categories.map((cat, idx) =>
              cat && (
                <li key={idx}>
                  <Link
                    to={`/shop-page?category=${cat}`} 
                    className={`text-md font-medium hover:bg-[black]/80 text-gray-300 rounded-md hover:border-b-2 hover:rounded-none px-2 py-0 hover:-mb-[2px] transition-transform ${selectedCategory === cat ? "text-white" : "text-gray-300"}`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </Link>
                </li>
              )
            )}
          </ul>
      </div>


    </div>
    </div>

  );
};

export default MenuBar;
