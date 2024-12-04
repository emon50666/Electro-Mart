import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

import Loader from "../Loader/Loader";
import useCategory from "../../Hooks/useCategory";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const { category: categories, isLoading } = useCategory();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const dropdownRef = useRef(null);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setIsOpen(false);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="navbar hidden lg:flex bg-[#030c35] text-white w-full">
      {/* All Category Hover Section */}
      <div
        className="relative px-2 w-full"
        ref={dropdownRef} // Attach ref to the dropdown container
        onMouseEnter={() => setIsOpen(true)}
      >
        {/* Toggle Button */}
        <button className="bg-blue-600 pt-1 pb-1 pl-3 pr-3 flex items-center rounded-full text-gray-100 text-md font-medium">
          All Category
          <IoIosArrowUp className="items-center pt-1 text-2xl font-bold" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-10 z-40 w-full bg-white shadow-lg border border-gray-200 mt-2 rounded-lg overflow-hidden">
            <ul className="space-y-2 p-4">
              {categories.map(
                (cat, idx) =>
                  cat && (
                    <li key={idx}>
                      <Link
                        to={`/shop-page?category=${cat}`}
                        className={`text-md font-medium px-2 py-1 block hover:bg-gray-100 hover:text-blue-500 ${
                          selectedCategory === cat
                            ? "text-blue-600"
                            : "text-black"
                        }`}
                        onClick={() => handleCategoryClick(cat)}
                      >
                        {cat}
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Horizontal Menu */}
      <div className="flex-1">
        <ul className="menu-horizontal px-1 space-x-2">
          {categories.map(
            (cat, idx) =>
              cat && (
                <li key={idx}>
                  <Link
                    to={`/shop-page?category=${cat}`}
                    className={`text-md font-medium hover:bg-[black]/80 text-gray-300 rounded-md hover:border-b-2 hover:rounded-none px-2 py-0 hover:-mb-[2px] transition-transform ${
                      selectedCategory === cat ? "text-white" : "text-gray-300"
                    }`}
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
  );
};

export default MenuBar;
