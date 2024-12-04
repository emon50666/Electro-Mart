import { FaStore, FaTruck, FaShieldAlt, FaCreditCard } from "react-icons/fa"; // Importing icons for demo
import { RiDiscountPercentFill } from "react-icons/ri";

const BenifetService = () => {
  const items = [
    { icon: <FaStore />, text: "Open new stores in your city" },
    { icon: <FaTruck />, text: "Free fast express delivery with tracking" },
    { icon: <FaShieldAlt />, text: "Equipment loose and damage insurance" },
    { icon: <FaCreditCard />, text: "Installment without over payments" },
    { icon: <RiDiscountPercentFill />, text: "Log in get up to 50% discounts" },
  ];
  return (
    <div>
      <div className="px-4 mt-10 mb-10">
        <div className="flex lg:grid lg:grid-cols-5 gap-3  md:grid-cols-3 sm:grid-cols-2  overflow-x-auto lg:overflow-hidden no-scrollbar">
          {items.map((item, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0  bg-white shadow-lg px-6 py-6 lg:px-3 lg:py-3 xl:py-5 rounded-md flex items-center space-x-4"
            >
              <div className="text-2xl  text-blue-500 animate-pulse">
                {item.icon}
              </div>
              <p className="text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenifetService;
