
import { Link, Outlet } from "react-router-dom";
import SideBar from "../components/DashBoard/SideBar";
import UserAuth from "../Hooks/useAuth";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";



const DashboardLayout = () => {
    const { user, loading ,logOut } = UserAuth();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
      setDropdownOpen(false);
    };
    return (
        <>
        
        <div className="lg:text-end py-1 sticky bg-white border-b border-dashed border-gray-200  px-2">
      <div 
        tabIndex={0} 
        role="button" 
        onClick={toggleDropdown} 
        className="relative cursor-pointer"
      >
        <div className="  items-center rounded-full">
          {user ? (
            <div className="relative inline-block">
              <img 
                title={user?.displayName} 
                src={user?.photoURL} 
                alt="User profile" 
                className="w-9 h-9 rounded-full border-2 border-blue-600 p-0.5"
              />
              <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
            </div>
          ) : (
           <>
           { 

            loading ? <div className="relative inline-block">
            <img 
              title={user?.displayName} 
              src={user?.photoURL} 
              alt="User profile" 
              className="w-9 h-9 rounded-full border-2 border-blue-600 p-0.5"
            />
            <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
          </div> : <div className="relative inline-block">
              <img 
                title={user?.displayName} 
                src={user?.photoURL} 
                alt="User profile" 
                className="w-9 h-9 rounded-full border-2 border-blue-600 p-0.5"
              />
              <span className="h-3 w-3 rounded-full border border-white bg-green-500 block absolute top-1 right-0"></span>
            </div>
           }
           </>
          )}
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute lg:right-0  w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
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
                <a href="/profile" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500" >Profile</a>
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



        


            <div className=" min-h-screen md:flex bg-[#EEEEEE]/30 ">

                {/* side bar */}
                <div>
                    <SideBar></SideBar>
                </div>
                {/* outlet dynamic content */}
                <div className="flex-1 md:ml-64 shadow-lg px-10  md:px-20 pt-2">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;