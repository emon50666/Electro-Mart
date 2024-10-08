import { useState } from "react";
import UserAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import logo_1 from '../../assets/images/logo_1.png'
import { IoCloseOutline } from "react-icons/io5";

const HeaderDashboard = () => {

  const { user, loading, logOut } = UserAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className=" flex justify-between fixed w-full pt-1 top-0 z-50  bg-white border-b border-dashed border-gray-200  px-2">
        <Link to={'/'}>
          <img src={logo_1} alt="" className="w-48 text-center mx-auto" />

        </Link>

        <div
          tabIndex={0}
          role="button"
          onClick={toggleDropdown}
          className="relative cursor-pointer"
        >

          {
            user ? <div className="relative inline-block">
              <img title={user?.displayName} src={user?.photoURL} className="w-10 h-10 rounded-full border-2 border-blue-600" />
              <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
            </div> : <>
              {
                loading ? <div className="relative inline-block">
                  <img title={user?.displayName} src={user?.photoURL} className="w-10 h-10 rounded-full border-2 border-blue-600" />
                  <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
                </div> : ''
              }
            </>
          }

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute -left-16 w-24  bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
              {/* Close Icon */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
                <span className="text-sm font-semibold text-gray-700">Menu</span>
                <IoCloseOutline
                  onClick={closeDropdown}
                  className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"
                />
              </div>

              {/* Dropdown Items */}
              <ul className="py-1 text-sm text-gray-700 text-left"> {/* Text aligned to the left */}
                <li>
                  <Link to={'profile'} className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500" >Profile</Link>
                </li>
                <li>
                  <a href="/settings" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500">Settings</a>
                </li>
                <li>
                  <Link to={'/'} onClick={logOut} className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500">LogOut</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>


    </div>
  );
};

export default HeaderDashboard;