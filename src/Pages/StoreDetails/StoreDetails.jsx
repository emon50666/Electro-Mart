import Map from "./Shared/Map";
import ServiceHour from "./Shared/ServiceHour";
import StoreAddress from "./Shared/StoreAddress";
import StoreHero from "./Shared/StoreHero";

const StoreDetails = () => {

    const oneStore = {
        storeName: "Tech Gear",
        location: "123 Main St, New York, NY",
        number: "+1-555-123-1234",
        workHours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm, Sun: Closed",
        shortDetails: "Specializes in the latest electronic gadgets like smartphones, laptops, and smart home devices. Also offers tech support and repairs.",
        imageUrl: "https://res.cloudinary.com/duv5fiurz/image/upload/v1727700324/store-bg_bra6cg.png"
    };

    return (
        <div className="md:px-10 mx-auto space-y-10 font_cabin bg-gray-100">
            {/* Store Hero Section */}
            <StoreHero store={oneStore} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                    <Map />
                </div>
                <div className="col-span-1 px-2">
                    <StoreAddress store={oneStore} />
                </div>
                <div className="col-span-1">
                    <ServiceHour />
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default StoreDetails;
