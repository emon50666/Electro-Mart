import { FaClipboardList, FaMapMarkerAlt, FaStoreAlt, FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const MemberDashboard = () => {
  const cards = [
    { title: "Orders", icon: <FaClipboardList className="text-orange-500" /> },
    { title: "Store", icon: <FaStoreAlt  className="text-[#22C55E] " /> },
    { title: "Addresses", icon: <FaMapMarkerAlt className="text-[#FF5200] " /> },
    { title: "Account details", icon: <FaUser  className="text-[#8F77F3] "/> },
    { title: "Cart", icon: <FaCartPlus  className="text-[rgb(35,119,252)] "/> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6  mt-16 px-2">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border border-orange-500 rounded-lg p-2 hover:shadow-lg transition-all"
        >
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-gray-700 text-lg font-semibold">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MemberDashboard;
