import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Loader from "../Loader/Loader";
import { Link, NavLink } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";

const MenuBar = () => {
  const { categories, isLoading } = useCategories();
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

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop-page" },
    { title: "Store", path: "/storesPage" },
    { title: "Promotion", path: "/promotion" },
    { title: "Contact Us", path: "/contacts" },
  ];

  if (isLoading) return <Loader />;

  return (
    <div className="navbar hidden lg:flex bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white w-full">
      {/* Left side */}
      <div
        className="relative px-2 w-full gap-x-5 font_inter"
        ref={dropdownRef}
      >
        {/* Toggle Button */}
        <div>
          <button
            onMouseEnter={() => setIsOpen(true)}
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 pt-1 pb-1 pl-3 pr-3 flex items-center rounded-full shadow-white text-gray-100 text-md font-medium"
          >
            All Category
            {isOpen ? (
              <IoIosArrowDown className="items-center pt-1 text-2xl font-bold" />
            ) : (
              <IoIosArrowUp className="items-center pt-1 text-2xl font-bold" />
            )}
          </button>
          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-5 z-40 w-full bg-white shadow-lg border border-gray-200 mt-2 rounded-lg overflow-hidden px-5 py-3 max-w-[1700px]">
              <ul className="grid lg:grid-cols-7 xl:grid-cols-10 gap-y-2">
                {categories.map(
                  (cat, idx) =>
                    cat.newCategory && (
                      <li key={idx}>
                        <Link
                          to={`/shop-page?category=${cat.newCategory}`}
                          className={`text-md font-medium px-2 py-1 block text-gray-600 hover:text-blue-500 hover:underline ${
                            selectedCategory === cat.newCategory
                              ? "text-blue-600"
                              : "text-black"
                          }`}
                          onClick={() => handleCategoryClick(cat.newCategory)}
                        >
                          {cat.newCategory}
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div>
          <ul className="flex gap-x-3">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-md font-medium hover:text-teal-300 ${
                      isActive
                        ? "bg-gray-50/40 underline rounded"
                        : "text-white"
                    } bg-gray-50/25 px-5 py-1`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
