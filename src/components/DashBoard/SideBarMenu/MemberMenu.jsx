import {
  FaClipboardList,
  FaMapMarkerAlt,
  FaStoreAlt,
  FaUser,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink } from "react-router-dom";
const MemberMenu = () => {
  return (
    <div>
      <ul className="flex font-serif flex-1 flex-col mt-12 text-gray-400 gap-1 py-3">
        <li className="">
          <NavLink
            to="my-account"
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
            to={"/"}
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
            <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
              Address
            </p>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to={"/"}
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
export default MemberMenu;