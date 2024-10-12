import { useParams } from "react-router-dom";
import Map from "./Shared/Map";
import ServiceHour from "./Shared/ServiceHour";
import StoreAddress from "./Shared/StoreAddress";
import StoreHero from "./Shared/StoreHero";
import useStores from "../../Hooks/useStores";

const StoreDetails = () => {
    const { id } = useParams();
    const { stores } = useStores();
    const oneStore = stores.find(store => store?._id === id)

    return (
        <div className="lg:px-10 mx-auto space-y-10 font_cabin bg-gray-100 py-14 lg:pt-28">
            {/* Store Hero Section */}
            <StoreHero store={oneStore} />
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8 md:gap-x-3">
                <div className="col-span-1 px-2 md:col-span-5 xl:col-span-1">
                    <Map />
                </div>
                <div className="col-span-1 px-2 md:col-span-2 xl:col-span-1">
                    <StoreAddress store={oneStore} />
                </div>
                <div className="col-span-1 px-2 md:col-span-2 xl:col-span-1">
                    <ServiceHour store={oneStore} />
                </div>
            </div>
        </div>
    );
};

export default StoreDetails;
