import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
const MenuBar = () => {
  const { categories } = useCategories();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar hidden lg:flex px-10 bg-slate-400 text-white sm:hidden md:hidden ">
      {/* All Category Hover Section */}
      <div
        className=" relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Toggle Button */}
        <div>
          <button className="bg-[#F97316] pt-1 pb-1 pl-3 pr-3  flex items-center rounded-full text-white font-bold"> All Category <IoIosArrowUp className="items-center pt-1 text-2xl
           font-bold"></IoIosArrowUp> </button>
        </div>

        {/* Responsive Full-Height Category Menu */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-full lg:w-64 bg-white shadow-lg p-4 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Close Icon */}
          <div
            className="absolute top-2 left-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes className="text-xl text-orange-500" />
          </div>

          {/* Menu Items */}
          <ul className="mt-8 space-y-4">
            <li className="py-2 hover:bg-gray-100">
              <Link to={'/productDetails'}>Product details</Link>
            </li>
            <li className="py-2 hover:bg-gray-100">
              <a>Item 2</a>
            </li>
            <li className="py-2 hover:bg-gray-100">

            </li>
          </ul>
        </div>
      </div>

      {/* lg menu */}

      <div>
        <ul className="menu menu-horizontal px-1 space-x-2">
          {categories.map((cat, idx) =>
            cat?.newCategory && (
              <li key={idx}>
                <a className="text-lg font-medium hover:bg-slate-400 hover:border-b-2 hover:rounded-none px-2 py-0 hover:-mb-[2px] transition-transform">
                  {cat?.newCategory}
                </a>
              </li>
            )
          )}

        </ul>
      </div>

    </div>
  );
};

export default MenuBar;
