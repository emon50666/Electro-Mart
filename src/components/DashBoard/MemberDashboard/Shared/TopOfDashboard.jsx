import { Link } from "react-router-dom";
import useCart from "../../../../Hooks/useCart";
import useStores from "../../../../Hooks/useStores";
import useUserOrder from "../../../../Hooks/useUserOrder";
import {
  FaCartPlus,
  FaClipboardList,
  FaMapMarkerAlt,
  FaStoreAlt,
  FaUser,
} from "react-icons/fa";

const TopOfDashboard = () => {
  const { theUserCarts } = useCart();
  const { stores } = useStores();
  const { theUserOrders } = useUserOrder();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6  mt-16 px-2">
      <Link
        to="/dashboard/member-order"
        className="flex flex-col items-center justify-center border border-blue-500 rounded-lg p-2 hover:shadow-lg transition-all"
      >
        <div className="text-4xl mb-4">
          <FaClipboardList className="text-blue-500" />
        </div>
        <h3 className="text-gray-700 text-lg font-semibold">
          {" "}
          Orders ( {theUserOrders.length} ){" "}
        </h3>
      </Link>

      <Link
        to={"/storesPage"}
        className="flex flex-col items-center justify-center border border-blue-500 rounded-lg p-2 hover:shadow-lg transition-all"
      >
        <h2 className="text-4xl mb-4">
          <FaStoreAlt className="text-[#22C55E] " />{" "}
        </h2>
        <h3 className="text-gray-700 text-lg font-semibold">
          {" "}
          Store ( {stores.length} ){" "}
        </h3>
      </Link>

      <div className="flex flex-col items-center justify-center border border-blue-500 rounded-lg p-2 hover:shadow-lg transition-all">
        <div className="text-4xl mb-4">
          <FaMapMarkerAlt className="text-[#FF5200] " />{" "}
        </div>
        <Link to={'../trackOrder'} className="text-gray-700 text-lg font-semibold"> Track Order </Link>
      </div>

      <div className="flex flex-col items-center justify-center border border-blue-500 rounded-lg p-2 hover:shadow-lg transition-all">
        <div className="text-4xl mb-4">
          <FaUser className="text-[#8F77F3] " />{" "}
        </div>
        <h3 className="text-gray-700 text-lg font-semibold">
          {" "}
          Account details{" "}
        </h3>
      </div>

      <Link to={'/manageCart'} className="flex flex-col items-center justify-center border border-blue-500 rounded-lg p-2 hover:shadow-lg transition-all">
        <div className="text-4xl mb-4">
          <FaCartPlus className="text-[rgb(35,119,252)] " />{" "}
        </div>
        <h3 className="text-gray-700 text-lg font-semibold">
          {" "}
          Cart ( {theUserCarts.length} ){" "}
        </h3>
      </Link>
    </div>
  );
};

export default TopOfDashboard;
