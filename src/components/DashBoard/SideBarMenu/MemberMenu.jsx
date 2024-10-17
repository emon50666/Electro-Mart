import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MemberMenu = () => {
    return (
        <div>
        <ul className="flex font-serif flex-1 flex-col mt-12 text-gray-400 gap-1 py-3">

      
          <li className="px-3">
            <Link

              className="flex  items-center gap-3 rounded p-3  transition-colors hover:bg-[#22292F] hover:text-orange-500 focus:bg-orange-50 aria-[current=page]:bg-orange-50 aria-[current=page]:text-orange-500  "
            >
              <div className="flex   font-semibold text-[16px] items-center self-center">
                <HiOutlineShoppingBag></HiOutlineShoppingBag>
              </div>
              <Link to={'my-account'} className="flex  font-semibold text-[16px] w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                Account
              </Link>
            </Link>
          </li>
          </ul>
        </div>
    );
};

export default MemberMenu;