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
        imageUrl: "https://example.com/techgear-image.jpg"
    }
    return (
        <div className="md:px-10 mx-auto space-y-10">
            <StoreHero store={oneStore} />
            <div>
                <Map />
                <StoreAddress />
                <ServiceHour />
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default StoreDetails;