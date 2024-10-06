import { Link } from "react-router-dom";
import { IoHomeOutline, IoAddCircleOutline ,IoStorefrontOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";


const AdminMenu = () => {
  return (
    <div>
      <div>
        <ul className="flex font-serif flex-1 flex-col mt-10 gap-1 py-3">
          <li className="px-3">
            <Link
              
              className="flex  items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
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
              className="flex items-center text-[16px]  gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-emerald-500 "
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
            <ul className="absolute  w-full  top-full hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
              <li className="px-3 ">
                <Link
                  to="/all-products"
                  className=" block py-2 px-4 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-500"  > All Products </Link>

              </li>
              <li className="px-3">
                <Link
                  to="addProduct"
                  className="block py-2 px-4 text-sm font-medium text-slate-700 hover:bg-orange-50
                   hover:text-orange-500  aria-[current=page]:bg-orange-50 aria-[current=page]:text-emerald-500"
                >
                  Add New Product
                </Link>
              </li>
            </ul>
          </li>

          <li className="px-3">
            <Link
             
              className="flex  items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
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
               className="flex  items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
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
            <Link
               className="flex  items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500 "
            >
              <div className="flex   font-semibold text-[16px] items-center self-center">
                <IoStorefrontOutline ></IoStorefrontOutline>
              </div>
              <Link to={'/'} className="flex  font-semibold text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Add Store
              </Link>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;