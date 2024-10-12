import PropType from "prop-types"
import { FaStore } from "react-icons/fa6";
import { IoCartOutline, IoLocation, IoSettingsOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
const StoreAddress = ({ store }) => {
    return (
        <div className="p-5 bg-white rounded-lg h-full">
            <h3 className="text-2xl font-semibold mb-5 font_cabin">Address</h3>
            <div className="space-y-2">
                {/* location */}
                <div className="flex items-center gap-x-2">
                    <div className="p-2 rounded-full bg-blue-600 text-gray-200"><IoLocation className="" /></div>
                    <h4 className="text-[#7B828D]">{store?.shopAddress}</h4>
                </div>
                {/* contact */}
                <div className="flex items-center gap-x-2">
                    <div className="p-2 rounded-full bg-blue-600 text-gray-200"><LuPhone className="" /></div>
                    <h4 className="text-[#7B828D]">{store?.shopContactNumber}</h4>
                </div>
            </div>
            <h3 className="text-2xl font-semibold my-5 font_cabin">Facilities</h3>
            <div className="flex flex-col md:flex-row xl:items-center gap-y-1 md:gap-x-3">
                <div className="flex px-4 py-1 items-center bg-gray-200 text-[#7B828D] rounded-md text-sm font-medium gap-x-1 cursor-pointer hover:bg-gray-400 transition-all hover:text-gray-100">
                    <div><IoCartOutline /></div>
                    <h4>Store</h4>
                </div>
                <div className="flex px-4 py-1 items-center bg-gray-200 text-[#7B828D] rounded-md text-sm font-medium gap-x-1 cursor-pointer hover:bg-gray-400 transition-all hover:text-gray-100">
                    <div><FaStore /></div>
                    <h4>Point of Delivery</h4>
                </div>
                <div className="flex px-4 py-1 items-center bg-gray-200 text-[#7B828D] rounded-md text-sm font-medium gap-x-1 cursor-pointer hover:bg-gray-400 transition-all hover:text-gray-100">
                    <div><IoSettingsOutline /></div>
                    <h4>Service Center</h4>
                </div>
            </div>
            <h3 className="text-2xl font-semibold mt-5 mb-1 font_cabin">About Shop</h3>
            <p className="text-gray-500">{store?.shortDescription}</p>
        </div>
    );
};
StoreAddress.propTypes = {
    store: PropType.object,
}
export default StoreAddress;