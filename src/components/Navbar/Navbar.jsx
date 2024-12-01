import { useState } from "react";
import logo_1 from "../../assets/images/new1.png";
import { Link } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart,  } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import MobileNavBar from "../Navbar/MobileNavBar";
import AddCart from "../AddToCart/AddCart";
import useCart from "../../Hooks/useCart";
import useCompare from "../../Hooks/useCompare";
import SearchBar from "./SearchBar";
import useWishlist from "../../Hooks/useWishlist";
import useRoll from "../../Hooks/useRoll";

const Navbar = () => {


  const [role] = useRoll()
  const { user, loading, logOut } = useAuth();
  const { theUserCarts } = useCart();
  const { theUserCompares } = useCompare();
  const { theUserWishlist, } = useWishlist()
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = () => {
    setCartOpen(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 px-3 z-20 ">
      <div className="navbar-start px-2 lg:px-0">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="">
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-500 border border-dashed border-blue-500 rounded-md bg-blue-200/20"
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
                className="h-8 w-8 text-blue-500 border border-dashed border-blue-500 rounded-md bg-blue-200/20"
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
        <div className="hidden sm:block md:hidden  lg:block">
          <Link to={"/"}>
            <img src={logo_1} alt="Logo"  />
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-50 overflow-y-scroll w-64 transform bg-base-100 shadow-md p-4 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <MobileNavBar></MobileNavBar>
      </div>

      {/* Center the SearchBar */}
      <div className="hidden lg:flex flex-1 justify-center">
        <SearchBar />
      </div>



      <div className="lg:hidden ">
        <Link to={"/"}>
          <img src={logo_1} alt="" />
        </Link>
      </div>

        {/* contact number */} 
        <div className="hidden sm:block  pl-16  relative bottom-1  lg:block">
          <sub className="pl-8 font-semibold">24/7 Support</sub>
  <div className="flex items-center gap-2">
  <FaPhoneAlt ume className="text-blue-500 text-[25px] relative bottom-1 "></FaPhoneAlt>

  <Link to={'tel:01786397249'}><h1 className="font-semibold text-md text-blue-500">01786397249</h1></Link>
  </div>
</div>
      <div className="navbar-end px-3 gap-5">
        <div className="hidden lg:flex space-x-3">
          <div
            onClick={handleAddToCart}
            className="relative bg-blue-200/50 hover:bg-blue-300/50 cursor-pointer rounded-full p-2"
          >
            <FaCartShopping className="text-lg text-blue-600" />
            {!loading && (
              theUserCarts.length > 0 && (
                <span className="absolute -right-1 -ml-1 -top-2 h-4 w-4 rounded-full bg-blue-500 px-1 py-0 text-[10px] text-white flex items-center justify-center">
                 

                  {theUserCarts.length >= 9 ? "9+" : theUserCarts.length}
          </span>
          )
            )}


        </div>
        <Link to={'/comparePage'} className="relative bg-blue-200/50 hover:bg-blue-300/50 cursor-pointer rounded-full p-2">
          <IoGitCompareOutline className="text-lg text-blue-600" />


          {!loading && (

            theUserCompares.length > 0 && (
              <span className="absolute -right-1 -ml-1 -top-2 h-4 w-4 rounded-full bg-blue-500 px-1 py-0 text-[10px] text-white flex items-center justify-center">
                {theUserCompares.length >= 9 ? "9+" `${theUserCompares.length}+` : theUserCompares.length}
              </span>
            )

          )}
        </Link>

        <Link to={'/wishlist'} className="relative bg-blue-200/50 hover:bg-blue-300/50 cursor-pointer rounded-full p-2">
          <FaHeart className="text-lg text-blue-600" />

          {!loading && (
            theUserWishlist.length > 0 && ( // Display if there are items in the wishlist
              <span className="absolute -right-1 -ml-1 -top-2 h-4 w-4 rounded-full bg-blue-500 px-1 py-0 text-[10px] text-white flex items-center justify-center">
                {theUserWishlist.length >= 9 ? "9+" `${theUserWishlist.length}+` : theUserWishlist.length}
              </span>
            )
          )}


        </Link>
      </div>

      {cartOpen && <AddCart setCartOpen={setCartOpen} />}

      <div className="dropdown dropdown-end z-50">
        <div tabIndex={0} role="button" className=" rounded-full">


          {user ? (

            <div className="relative inline-block">
              <img
                referrerPolicy="no-referrer"
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
                    referrerPolicy="no-referrer"
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-full border-2 border-blue-600 p-0.5"
                  />
                  <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
                </div>
              ) : (
                <Link to={"/register"}>
                  <div className="relative bg-blue-200/50 hover:bg-blue-300/50 cursor-pointer rounded-full p-2">
                    <MdAccountCircle className="text-lg text-blue-600" />
                    <span className="absolute -right-2 -top-3 rounded-full bg-blue-500 pt-[1px] pb-[4px] pl-1 pr-1 py-[1px] text-[10px] text-white">
                      Account
                    </span>
                  </div>
                </Link>
              )}
            </>
          )}

          <>


          </>

        </div>
        {user && (
          <ul
            tabIndex={0}
            className="menu menu-sm font-semibold right-0 dropdown-content bg-[#030C35] text-gray-300 overflow-hidden rounded-box w-36 shadow-md"
          >

            <Link
              to={role === 'admin' ? "dashboard/dashboard-layout" : "dashboard/my-account"}
              className="hover:bg-blue-50 p-2 rounded-md hover:text-blue-500"
            >
              <li>DashBoard</li>
            </Link>



            <Link to={'dashboard/profile'} className="hover:bg-blue-50 p-2 rounded-md hover:text-blue-500">
              <li>Profile</li>
            </Link>
            <Link className="hover:bg-blue-50 p-2 rounded-md hover:text-blue-500">
              <li>Setting</li>
            </Link>
            <Link to={"/register"} className="hover:bg-blue-50 p-2 rounded-md hover:text-blue-500">
              <button onClick={logOut}>Logout</button>
            </Link>
          </ul>
        )}
      </div>
    </div>
    </div >


  );
};

export default Navbar;
