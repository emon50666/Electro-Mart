import { Link, useParams } from "react-router-dom";
import Map from "./Shared/Map";
import ServiceHour from "./Shared/ServiceHour";
import StoreAddress from "./Shared/StoreAddress";
import StoreHero from "./Shared/StoreHero";
import useStores from "../../Hooks/useStores";
import { useState } from "react";

const StoreDetails = () => {
    const { id } = useParams();
    const { stores } = useStores();
    const [role,] = useState('Admin')
    const oneStore = stores.find(store => store?._id === id)

    return (
        <div className="lg:px-10 mx-auto space-y-10 font_cabin bg-gray-100 py-1 lg:pt-[82px] px-2">
            {/* Store Hero Section */}
            {role == "Admin" && (
                <div className="flex justify-between items-center border-2 border-dashed border-gray-400 px-5 md:px-10 lg:px-16 xl:px-20 py-3 bg-gray-300">
                    <h3 className="md:text-lg lg:text-xl xl:text-2xl font-semi-bold">Admin Panel</h3>
                    <div>
                        <Link
                            to={`/dashboard/updateStore/${oneStore?._id}`}
                            className="text-sm lg:text-base bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300">
                            Update
                        </Link>
                    </div>
                </div>
            )}
            <StoreHero store={oneStore} />
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8 md:gap-x-3">
                <div className="col-span-1 md:col-span-5 xl:col-span-1">
                    <Map />
                </div>
                <div className="col-span-1 md:col-span-2 xl:col-span-1">
                    <StoreAddress store={oneStore} />
                </div>
                <div className="col-span-1 md:col-span-2 xl:col-span-1">
                    <ServiceHour store={oneStore} />
                </div>
            </div>
        </div>
    );
};

export default StoreDetails;
