import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Loader from "../Loader/Loader";
import { Link, NavLink } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import useRoll from "../../Hooks/useRoll";

const MenuBar = () => {
  const { categories, isLoading } = useCategories();
  const [isOpen, setIsOpen] = useState(false);
  const [role] = useRoll();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [disable, setDisable] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    if (role == "admin") {
      setDisable(true);
    }
  }, [role]);

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
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contacts" },
  ];
  // console.log(role);

  if (isLoading) return <Loader />;

  return (
    <div className="navbar hidden lg:flex bg-gradient-to-r from-blue-700 via-blue-900 to-blue-500 text-white w-full">
      {/* Left side */}
      <div
        className="relative px-2 w-full gap-x-5 font_inter xl:flex-1"
        ref={dropdownRef}
      >
        {/* Toggle Button */}
        <div>
          <button
            onMouseEnter={() => setIsOpen(true)}
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 pt-1 pb-1 pl-3 pr-3 flex items-center rounded-full shadow-white text-gray-100 text-md font-medium text-sm xl:text-base"
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
            <div className="absolute lg:w-[1160px] xl:w-[1790px]  w-full top-full left-0 z-40 ml-2 xl:ml-4 bg-white shadow-lg border border-gray-200 mt-4 overflow-hidden overflow-x-hidden py-3">
              <ul className=" grid grid-cols-8 xl:grid-cols-12 gap-y-2  pt-2">
                {categories.map(
                  (cat, idx) =>
                    cat.newCategory && (
                      <li key={idx} className="col-span-1">
                        <Link
                          to={`/shop-page?category=${cat.newCategory}`}
                          onClick={() => handleCategoryClick(cat.newCategory)}
                        >
                          <span
                            className={`text-md font-medium px-2 py-1 block text-gray-600 hover:text-blue-500 hover:underline truncate ${
                              selectedCategory === cat.newCategory
                                ? "text-blue-600"
                                : "text-black"
                            }`}
                          >
                            {cat.newCategory}
                          </span>
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
                    } bg-gray-50/10 px-5 py-1 rounded text-sm xl:text-base`
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Right side */}
      <div className="">
        {/* Track Order Section */}

        <div className="flex items-center justify-end  xl:gap-x-10 px-2 xl:px-5 xl:flex-1">
          <button
            disabled={disable}
            className={`flex flex-col lg:w-[120px] items-center  text-center ${
              disable ? "cursor-not-allowed" : ""
            }`}
          >
            <Link
              to="/dashboard/trackOrder"
              className={`flex items-center gap-2 ${
                disable ? "pointer-events-none" : "text-white"
              }`}
            >
              <FaLocationDot className="text-xl xl:text-base bg-white text-blue-600 p-1 rounded-full shadow-md" />
              <p className="text-md xl:text-base xl:font-medium ">
                Track Order
              </p>
            </Link>
          </button>
          <div className="xl:divider xl:divider-horizontal"></div>
          <div className="lg:hidden xl:flex gap-x-3 items-center justify-center">
            <div className="flex items-center gap-2 mt-1">
              <FaPhoneAlt className="text-blue-600 text-lg bg-white p-1 rounded-full shadow-md" />

              <h1 className="text-sm xl:text-base xl:font-semibold text-white hover:underline">
                01786397249
              </h1>
            </div>
            <p className="text-sm xl:text-base xl:font-semibold border-b border-white xl:border-0">
              24/7 Support
            </p>
          </div>
        </div>
        {/* Contact Section */}
      </div>
    </div>
  );
};

export default MenuBar;
