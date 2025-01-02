import { useState, useEffect, useRef } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import logo_1 from "../../assets/images/electro4.png";
import { IoCloseOutline } from "react-icons/io5";
import useRoll from "../../Hooks/useRoll";

const HeaderDashboard = () => {
  const { user, loading, logOut } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [role] = useRoll();
  // console.log(role);
  const dropdownRef = useRef(null); // Ref for dropdown container

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) // Check if click is outside the dropdown
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-between fixed w-full pt-1 pb-1 top-0 z-50 bg-[#1E293B] px-2">
        <Link to={"/"}>
          <img
            src={logo_1}
            alt=""
            className="w-28 mt-2 lg:w-44 text-center mx-auto"
          />
        </Link>

        <div
          tabIndex={0}
          role="button"
          onClick={toggleDropdown}
          className="relative cursor-pointer"
          ref={dropdownRef} // Attach ref to dropdown container
        >
          {user ? (
            <div className="relative flex gap-2">
              <img
                referrerPolicy="no-referrer"
                title={user?.displayName}
                src={user?.photoURL}
                className="w-10 h-10 rounded-full border-2 border-blue-500 p-0.5"
              />
              <div>
                <h2 className="text-[10px] lg:text-[13px] text-gray-200 font-semibold">
                  {user?.displayName}
                </h2>
                <h2 className="text-gray-400 text-[13px] font-semibold capitalize">
                  {role}
                </h2>
              </div>
            </div>
          ) : (
            <>
              {loading ? (
                <div className="relative inline-block">
                  <img
                    referrerPolicy="no-referrer"
                    title={user?.displayName}
                    src={user?.photoURL}
                    className="w-10 h-10 rounded-md"
                  />
                </div>
              ) : (
                ""
              )}
            </>
          )}

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute -left-16 w-44 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10">
              {/* Close Icon */}
              <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
                <span className="text-sm font-semibold text-gray-700">
                  Close
                </span>
                <IoCloseOutline
                  onClick={closeDropdown}
                  className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"
                />
              </div>

              {/* Dropdown Items */}
              <ul className="py-1 text-sm text-gray-700 text-left">
                <li>
                  <Link
                    to={role == "admin" ? "dashboard-layout" : "my-account"}
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500 lg:hidden"
                  >
                    Dashboard
                  </Link>
                </li>
                {role === 'admin' && (
                  <li>
                  <Link to={'setting'} className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500">Settings</Link>
                </li>
                )}
                <li>
                  <Link
                    to={"/settings"}
                    onClick={closeDropdown}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/register"}
                    onClick={() => {
                      logOut();
                      closeDropdown();
                    }}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-500"
                  >
                    LogOut
                  </Link>
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
