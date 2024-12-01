import { IoMdArrowDropright } from "react-icons/io";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const MousBanner = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration
    }, []);

    return (
        <>
         <div className=" mb-10">
         <div className="relative w-full lg:h-[500px] md:h-[400px] bg-red-300 flex items-center  overflow-hidden">
                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dpsgtszzi/image/upload/v1730359576/Screenshot_11_kgp0j0.png" // replace with your image URL
                    alt="Gaming Mouse"
                    className="absolute top-0  right-0 w-full h-full object-cover lg:object-right md:h-full md:w-auto lg:w-full"
                />

                {/* Overlay for gradient effect */}
                <div className="absolute inset-0 "></div>

                {/* Text Content */}
                <div

                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="relative z-10 text-start  p-6 md:p-10 lg:p-20   max-w-md">
                    <h2 className="text-3xl md:text-4xl text-[#2F3132] font-bold">G705 WIRELESS GAMING MOUSE</h2>
                    <p className="mt-2 md:mt-4 text-sm text-[#2F3132] md:text-md">
                        Dreamy new design shaped for smaller hands, contoured for comfort, and fully equipped for your best play experience yet.
                    </p>
                    <button className="mt-4  underline hover:translate-x-1 duration-700  flex items-center  text-[#2F3132] font-semibold rounded">
                        Shop G705 Now <IoMdArrowDropright className="items-center mt-1 text-xl"></IoMdArrowDropright>
                    </button>
                </div>
            </div>
         </div>
           
        </>

    );
}

export default MousBanner;
