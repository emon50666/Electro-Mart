import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Loader from "../Loader/Loader";
import useCategory from "../../Hooks/useCategory";
import { Link, NavLink } from "react-router-dom";

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

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop-page",
    },
    {
      title: "Store",
      path: "/storesPage",
    },
    {
      title: "Promotion",
      path: "/promotion",
    },
    {
      title: "Contact Us",
      path: "/contacts",
    },
  ];

  if (isLoading) return <Loader />;

  return (
    <div className="navbar hidden lg:flex bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white w-full">
      {/* left side */}
      <div
        className="relative px-2 w-full gap-x-5 font_inter"
        ref={dropdownRef} // Attach ref to the dropdown container
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
            <div className="absolute top-full left-5 z-40 w-full bg-white shadow-lg border border-gray-200 mt-2 rounded-lg overflow-hidden">
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
        {/* navigation btn */}
        <div>
          <ul className="flex gap-x-3">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-md font-medium hover:text-teal-300 ${
                      isActive
                        ? "bg-gray-50/40 underline rounded text-teal-300"
                        : "text-white"
                    }  bg-gray-50/25 px-5 py-1`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* right side */}
      <div></div>
    </div>
  );
};

export default MenuBar;
