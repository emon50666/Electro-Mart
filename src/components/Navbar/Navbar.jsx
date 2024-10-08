import { useState } from "react";
import logo_1 from "../../assets/images/logo_1.png";
import { Link } from "react-router-dom";


import UserAuth from "../../Hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";

import { IoGitCompareOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";


import { MdAccountCircle } from "react-icons/md";
import MobileNavBar from "../Navbar/MobileNavBar";
import AddCart from "../AddToCart/AddCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleAddToCart = () => {
    setCartOpen(true);
  };

  const { user, logOut, loading } = UserAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="navbar bg-base-100  sticky top-0 z-40 md:px-10">
      <div className="navbar-start">
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-ghost"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-500 border border-dashed border-orange-500 rounded-md bg-orange-200/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-8 6h8"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-orange-500 border border-dashed border-orange-500 rounded-md bg-orange-200/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden sm:block md:hidden lg:block">
          <Link to={"/"}>
            <img src={logo_1} alt="Logo" />
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 overflow-y-scroll  w-64 transform bg-base-100 shadow-md p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileNavBar></MobileNavBar>
      </div>

      {/* search bar */}

      <div className="hidden lg:flex lg:-mr-16 ">
        <input
          type="search"
          placeholder="Search Products..."
          className="border-l border-t border-b border-orange-400 w-96 pt-2 pb-2 px-2 py-2 border-dashed rounded-l-full focus:outline-dashed outline-orange-400 focus:ring-0"
        />

        <button className="relative right-12 bg-orange-500 rounded-l-none border-b border-orange-500 border-t-border-orange-500 flex text-white   pt-[8px]  pr-3 pb-[9px] pl-5  rounded-r-full focus:outline-none focus:ring-0">
          Search
        </button>
      </div>

      <div className="  lg:hidden ">
        <Link to={"/"}>
          <img src={logo_1} alt="" />{" "}
        </Link>
      </div>

      <div className="navbar-end gap-5">
        {/* menu icon  */}

        <div className="hidden lg:flex space-x-3">
          <div
           onClick={handleAddToCart}
          className="relative bg-orange-200/50 hover:bg-orange-300/50 cursor-pointer  rounded-full p-2">
            <FaCartShopping className="text-lg text-orange-600 " />
            <span className="absolute -right-2 -ml-1 -top-2 rounded-[100%]  bg-orange-500 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
          <Link to={'/wishlist'} className="relative bg-orange-200/50 hover:bg-orange-300/50 cursor-pointer  rounded-full p-2">
            <IoGitCompareOutline className="text-lg text-orange-600 " />
            <span className="absolute -right-2 -ml-1 -top-2 rounded-[100%]  bg-orange-500 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </Link>
          <div className="relative bg-orange-200/50 hover:bg-orange-300/50 cursor-pointer  rounded-full p-2">
            <FaHeart className="text-lg text-orange-600 " />
            <span className="absolute -right-2 -ml-1 -top-2 rounded-[100%]  bg-orange-500 px-1 py-[1px] text-[10px] text-white">
              9+
            </span>
          </div>
        </div>
        {cartOpen && <AddCart setCartOpen={setCartOpen} />}

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="  ">
            <div className="p-1 rounded-full  ">
              {user ? (
                <div className="relative inline-block">
                  <img
                    title={user?.displayName}
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full border-2 border-blue-600 p-0.5"
                  />
                  <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
                </div>
              ) : (
                <>
                  {loading ? (
                    <div className="relative inline-block">
                      <img
                        src={user?.photoURL}
                        className="w-10 h-10 rounded-full border-2 border-blue-600 p-0.5"
                      />
                      <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
                    </div>
                  ) : (
                    <Link to={"/register"}>
                      {" "}
                      <div className="relative bg-orange-200/50 hover:bg-orange-300/50 cursor-pointer  rounded-full p-2">
                        <MdAccountCircle className="text-lg text-orange-600 " />
                        <span
                          className="absolute -right-2 -top-3 rounded-full bg-orange-500  pt-[1px] pb-[4px] pl-1 pr-1  py-[1px] text-[10px]
            text-white"
                        >
                          Account
                        </span>
                      </div>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
          {user ? (
            <ul
              tabIndex={0}
              className="menu menu-sm  font-semibold - right-0  dropdown-content bg-white overflow-hidden rounded-box   w-48 shadow-md"
            >
              <Link
                to={"/dashboard"}
                className="hover:bg-orange-50 p-2   rounded-md hover:text-orange-500"
              >
                <li>DashBoard</li>
              </Link>

              <Link className="hover:bg-orange-50 p-2 rounded-md hover:text-orange-500">
                <li>Profile</li>
              </Link>
              <Link className="hover:bg-orange-50 p-2  rounded-md hover:text-orange-500">
                <li>Setting</li>
              </Link>

              <Link
                to={"/register"}
                className="hover:bg-orange-50 p-2  rounded-md hover:text-orange-500"
              >
                {" "}
                <button onClick={logOut}>
                  <a> Logout</a>
                </button>
              </Link>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;