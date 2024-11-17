import { IoMdArrowDropright } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MouseBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <div className="mb-10">
        <div
          className="relative w-full md:h-[400px] flex items-center overflow-hidden bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dpsgtszzi/image/upload/v1730359576/Screenshot_11_kgp0j0.png')`,
          }}
        >
          {/* Overlay for gradient effect (optional) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

          {/* Text Content */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="relative z-10 text-start p-6 md:p-10 lg:p-20 text-white max-w-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              G705 WIRELESS GAMING MOUSE
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-md">
              Dreamy new design shaped for smaller hands, contoured for comfort,
              and fully equipped for your best play experience yet.
            </p>
            <button className="mt-4 underline hover:translate-x-1 duration-700 flex items-center font-semibold rounded">
              Shop G705 Now{" "}
              <IoMdArrowDropright className="items-center mt-1 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MouseBanner;
