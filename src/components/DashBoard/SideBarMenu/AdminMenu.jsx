import { Link } from "react-router-dom";
import { IoHomeOutline, IoAddCircleOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser, FaStoreAlt } from "react-icons/fa";
import { AiFillControl } from "react-icons/ai";


const AdminMenu = () => {
  return (
    <div className="">
      <div className="">
        <ul className="flex font-serif flex-1 flex-col mt-10 text-gray-400 gap-1 py-3">
          <li className="px-3">
            <Link
              className="flex mt-1 items-center gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
            >
              <div className="flex   items-center self-center">
                <IoHomeOutline></IoHomeOutline>
              </div>
              <Link to={'/'} className="flex  text-[16px] font-semibold w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate ">
                Home
              </Link>
            </Link>
          </li>
          <li className="px-3 group relative">
            <Link
              className="flex items-center text-[16px]  gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-emerald-500 "
            >
              <div className="flex text-md  font-semibold  items-center self-center">
                <IoAddCircleOutline />
              </div>
              <Link
                to="#"
                className="flex font-semibold text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate"
              >
                Product
              </Link>
            </Link>

            {/* Submenu */}
            <ul className="absolute  w-full text-gray-400  top-full hidden group-hover:block bg-[#22292F] shadow-lg rounded-lg p-2">
              <li className="px-3 ">
                <Link
                  to="manageProduct"
                  className=" block py-2 px-4 text-sm font-medium  hover:bg-[#22292F] hover:text-orange-500">Manage Product</Link>
              </li>
              <li className="px-3">
                <Link
                  to="addProduct"
                  className="block py-2 px-4 text-sm font-medium  hover:bg-[#22292F]
                   hover:text-orange-500  aria-[current=page]:bg-orange-50 aria-[current=page]:text-emerald-500"
                >
                  Add New Product
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-3">
            <Link

              className="flex  items-center gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
            >
              <div className="flex   font-semibold text-[16px] items-center self-center">
                <HiOutlineShoppingBag></HiOutlineShoppingBag>
              </div>
              <Link to={'Order-List'} className="flex  font-semibold text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Order
              </Link>
            </Link>
          </li>


          <li className="px-3">
            <Link
              className="flex  items-center gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
            >
              <div className="flex   font-semibold text-[16px] items-center self-center">
                <FaRegUser></FaRegUser>
              </div>
              <Link to={'user'} className="flex  font-semibold text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                User
              </Link>
            </Link>
          </li>
          <li className="px-3">
            <Link to={'promotionControl'} className="flex  items-center gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500">
              <div className="flex   font-semibold text-[16px] items-center self-center">
                <AiFillControl />
              </div>
              Promotion Control
            </Link>
          </li>
          <li className="px-3 group relative">
            <Link
              className="flex items-center text-[16px]  gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-emerald-500 "
            >
              <div className="flex text-md  font-semibold  items-center self-center">
                <FaStoreAlt />
              </div>
              <Link
                to="#"
                className="flex font-semibold text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate"
              >
                Stores
              </Link>
            </Link>

            {/* Submenu */}
            <ul className="absolute  w-full text-gray-400  top-full hidden group-hover:block bg-[#22292F] shadow-lg rounded-lg p-2">
              <li className="px-3 ">
                <Link
                  to="manageStore"
                  className=" block py-2 px-4 text-sm font-medium  hover:bg-[#22292F] hover:text-orange-500">Manage Store</Link>
              </li>
              <li className="px-3">
                <Link
                  to="addStore"
                  className="block py-2 px-4 text-sm font-medium  hover:bg-[#22292F]
                   hover:text-orange-500  aria-[current=page]:bg-orange-50 aria-[current=page]:text-emerald-500"
                >
                  Add Store
                </Link>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;