import { NavLink } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser, FaStoreAlt } from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import useOrder from "../../../Hooks/useOrder";
import useProduct from "../../../Hooks/useProduct";
import PropType from "prop-types";
const AdminMenu = ({ setIsSideNavOpen }) => {
  const { payments } = useOrder();
  const { products } = useProduct();

  const handleClick = () => {
    setIsSideNavOpen(false);
  };
  return (
    <div className="">
      <div className="">
        <ul className="flex font-serif flex-1 flex-col mt-10 text-gray-400 gap-0 py-3">
          <li className="">
            <NavLink
              to={"dashboard-layout"}
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

          <li className=" group relative">
            <NavLink
              className={({ isActive }) =>
                `flex items-center text-[16px] gap-3 rounded p-3 transition-colors ${
                  isActive
                    ? " "
                    : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
                }`
              }
              to="#"
            >
              <div className="flex text-md font-semibold items-center self-center">
                <IoAddCircleOutline />
              </div>
              <span className="flex  relative text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                Products
                <span className="absolute -right-0 -ml-1 left-[69px] -top-0   h-4 w-4 rounded-full bg-orange-500 px-1 py-1 text-[10px] text-white flex items-center justify-center">
                  {products.length}
                </span>
              </span>
            </NavLink>

            {/* Submenu */}
            <ul className="absolute w-full z-40 text-gray-400 top-full hidden group-hover:block bg-[#22292F] shadow-lg rounded-lg p-2">
              <li className="">
                <NavLink
                  to="manageProduct"
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `block py-2 px-4 text-sm font-medium hover:bg-[#22292F] hover:text-orange-500 ${
                      isActive
                        ? "bg-black border-l-2 border-l-orange-500  text-orange-500"
                        : "text-gray-400"
                    }`
                  }
                >
                  Manage Product
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="addProduct"
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `block py-2 px-4 text-sm font-medium hover:bg-[#22292F] hover:text-orange-500 ${
                      isActive
                        ? "bg-black border-l-2 border-l-orange-500 text-orange-500"
                        : "text-gray-400"
                    }`
                  }
                >
                  Add New Product
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="">
            <NavLink
              to={"order-list"}
              onClick={handleClick}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded p-3 transition-colors ${
                  isActive
                    ? "bg-black border-l-2 border-l-orange-500 text-orange-500"
                    : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
                }`
              }
            >
              <div className="flex text-[16px]  items-center self-center">
                <HiOutlineShoppingBag />
              </div>
              <span className="flex  relative text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                Orders
                <span
                  className="absolute -right-0 -ml-1 left-[55px] -top-0 
                  h-4 w-4 rounded-full bg-orange-500 px-1 py-1 pt-1  text-[10px] text-white flex items-center justify-center"
                >
                  {payments.length}
                </span>
              </span>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to={"user"}
              onClick={handleClick}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded p-3 transition-colors ${
                  isActive
                    ? "bg-black border-l-2 border-l-orange-500  text-orange-500"
                    : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
                }`
              }
            >
              <div className="flex  text-[16px] items-center self-center">
                <FaRegUser />
              </div>
              <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate ">
                User
              </p>
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to={"promotionControl"}
              onClick={handleClick}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded p-3 transition-colors ${
                  isActive
                    ? "bg-black border-l-2 border-l-orange-500 text-orange-500"
                    : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
                }`
              }
            >
              <div className="flex text-[16px]  items-center self-center">
                <AiFillControl />
              </div>
              Promotion
            </NavLink>
          </li>

          <li className=" group relative">
            <NavLink
              className={({ isActive }) =>
                `flex items-center text-[16px] gap-3 rounded p-3 transition-colors ${
                  isActive
                    ? ""
                    : "text-gray-400 hover:bg-[#22292F] hover:text-orange-500"
                }`
              }
              to="#"
            >
              <div className="flex text-md font-semibold items-center self-center">
                <FaStoreAlt />
              </div>
              <p className="flex  w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden ">
                Stores
              </p>
            </NavLink>

            {/* Submenu */}
            <ul className="absolute w-full text-gray-400 top-full hidden group-hover:block bg-[#22292F] shadow-lg rounded-lg p-2">
              <li className="">
                <NavLink
                  to="manageStore"
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `block py-2 px-4 text-sm hover:bg-[#22292F] hover:text-orange-500 ${
                      isActive
                        ? "bg-black border-l-2 border-l-orange-500 text-orange-500"
                        : "text-gray-400"
                    }`
                  }
                >
                  Manage Store
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="addStore"
                  onClick={handleClick}
                  className={({ isActive }) =>
                    `block py-2 px-4 text-sm  hover:bg-[#22292F] hover:text-orange-500 ${
                      isActive
                        ? "bg-black  border-l-2 border-l-orange-500 text-orange-500"
                        : "text-gray-400"
                    }`
                  }
                >
                  Add Store
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
AdminMenu.propTypes = {
  setIsSideNavOpen: PropType.func,
};
export default AdminMenu;
