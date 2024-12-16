import { Link, useParams } from "react-router-dom";

import ServiceHour from "./Shared/ServiceHour";
import StoreAddress from "./Shared/StoreAddress";
import StoreHero from "./Shared/StoreHero";
import useStores from "../../Hooks/useStores";
import { useState } from "react";
import { Helmet } from "react-helmet";

const StoreDetails = () => {
  const { id } = useParams();
  const { stores } = useStores();
  const [role] = useState("Admin");
  const oneStore = stores.find((store) => store?._id === id);

  return (
    <div className="lg:px-10 mx-auto space-y-10 pb-5 font_cabin bg-gray-100 py-1 lg:pt-2 px-2">
      <Helmet>
        <title>Store Details | Elector Mart</title>
      </Helmet>
      {/* Store Hero Section */}
      {role == "admin" && (
        <div className="flex justify-between items-center border border-dashed border-slate-400 px-5 md:px-10 lg:px-16 xl:px-20 py-3">
          <h3 className="md:text-lg lg:text-xl xl:text-2xl font-semi-bold">
            Admin Panel
          </h3>
          <div>
            <Link
              to={`/dashboard/updateStore/${oneStore?._id}`}
              className="text-sm lg:text-base bg-slate-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Update
            </Link>
          </div>
        </div>
      )}
      <StoreHero store={oneStore} />
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-3 gap-8 md:gap-x-3">
        <div className="col-span-1 md:col-span-5 xl:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.499951088!2d90.25452512197852!3d23.781066877945634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1734190324310!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
