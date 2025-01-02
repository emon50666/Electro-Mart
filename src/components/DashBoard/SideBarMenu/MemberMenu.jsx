import {
  FaClipboardList,
  FaMapMarkerAlt,
  FaStoreAlt,
  FaUser,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import PropType from "prop-types";

const MemberMenu = ({ setIsSideNavOpen }) => {
  const handleClick = () => {
    setIsSideNavOpen(false);
  };
  return (
    <div>
      <ul className="flex font-serif flex-1 flex-col mt-12 text-gray-400 gap-1 py-3">
        <li className="">
          <NavLink
            to="my-account"
            onClick={handleClick}
            className={({ isActive }) =>
              `flex mt-1 items-center gap-3 rounded p-3 transition-colors ${
                isActive
                  ? "bg-black  text-orange-400 border-l-2 border-l-orange-500"
                  : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
              }`
            }
          >
            <div className="flex items-center self-center">
              <MdDashboardCustomize />
            </div>
            <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
              DashBoard
            </p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to={"member-order"}
            onClick={handleClick}
            className={({ isActive }) =>
              `flex mt-1 items-center gap-3 rounded p-3 transition-colors ${
                isActive
                  ? "bg-black  text-orange-400 border-l-2 border-l-orange-500"
                  : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
              }`
            }
          >
            <div className="flex items-center self-center">
              <FaClipboardList />
            </div>
            <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
              Orders
            </p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to={"/storesPage"}
            className={({ isActive }) =>
              `flex mt-1 items-center gap-3 rounded p-3 transition-colors ${
                isActive
                  ? "bg-black  text-orange-400 border-l-2 border-l-orange-500"
                  : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
              }`
            }
          >
            <div className="flex items-center self-center">
              <FaStoreAlt />
            </div>
            <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
              Store
            </p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to={"/"}
            onClick={handleClick}
            className={({ isActive }) =>
              `flex mt-1 items-center gap-3 rounded p-3 transition-colors ${
                isActive
                  ? "bg-black  text-orange-400 border-l-2 border-l-orange-500"
                  : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
              }`
            }
          >
            <div className="flex items-center self-center">
              <FaMapMarkerAlt />
            </div>
           <Link to={'trackOrder'}>  <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
              Track Order
            </p></Link>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to={"/"}
            onClick={handleClick}
            className={({ isActive }) =>
              `flex mt-1 items-center gap-3 rounded p-3 transition-colors ${
                isActive
                  ? "bg-black  text-orange-400 border-l-2 border-l-orange-500"
                  : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
              }`
            }
          >
            <div className="flex items-center self-center">
              <FaUser />
            </div>
            <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
              Account
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
MemberMenu.propTypes = {
  setIsSideNavOpen: PropType.func,
};
export default MemberMenu;
