import Map from "./Shared/Map";
import ServiceHour from "./Shared/ServiceHour";
import StoreAddress from "./Shared/StoreAddress";
import StoreHero from "./Shared/StoreHero";

const StoreDetails = () => {

    const oneStore = {
        storeName: "Gizmo World",
        location: "321 Innovation Blvd, Seattle, WA",
        number: "+1-555-321-4321",
        workHours: [
            { day: "Monday", hours: "10:00a.m.-7:00p.m." },
            { day: "Tuesday", hours: "10:00a.m.-7:00p.m." },
            { day: "Wednesday", hours: "10:00a.m.-7:00p.m." },
            { day: "Thursday", hours: "10:00a.m.-7:00p.m." },
            { day: "Friday", hours: "10:00a.m.-7:00p.m." },
            { day: "Saturday", hours: "11:00a.m.-5:00p.m." },
            { day: "Sunday", hours: "Closed" }
        ],
        shortDetails: "A one-stop shop for tech enthusiasts, offering a mix of gadgets, gaming consoles, VR devices, and drones. Also hosts tech workshops and demos.",
        imageUrl: "https://res.cloudinary.com/duv5fiurz/image/upload/v1727700324/store-bg_bra6cg.png"
    };

    return (
        <div className="lg:px-10 mx-auto space-y-10 font_cabin bg-gray-100 py-14">
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
