import { IoMdArrowDropright } from "react-icons/io";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const SliderComponent = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // You can adjust the duration
    }, []);

    return (
        <>
           
            <div className="relative mt-10 mb-10 w-full lg:h-[500px] md:h-[400px] flex items-center  overflow-hidden">
            <div className="absolute inset-0 "></div>

{/* Text Content */}
<div

    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    className="relative z-10 text-start  p-6 md:p-10 lg:p-16  text-[#2F3132] max-w-md">
    <h2 className="text-3xl md:text-4xl font-bold">G715 Wireless Gaming Keyboard</h2>
    <p className="mt-2 md:mt-4 text-[12px] md:text-md">
    Wireless mechanical keyboard designed for comfort and style with ethereal RGB lighting and full media controls at your fingertips.
    </p>
    <button className="mt-4  underline hover:translate-x-1 duration-700  flex items-center  text-[#2F3132] font-semibold rounded">
    Shop G715 Now <IoMdArrowDropright className="items-center mt-1 text-xl"></IoMdArrowDropright>
    </button>
</div>
                {/* Background Image */}
                <img
                    src="https://res.cloudinary.com/dpsgtszzi/image/upload/v1730362292/Screenshot_12_lsg84f.png" // replace with your image URL
                    alt="Gaming Mouse"
                    className="absolute top-0  right-0 w-full h-full object-cover lg:object-right md:h-full md:w-auto lg:w-full"
                />

                {/* Overlay for gradient effect */}
                
            </div>
        </>

    );
}

export default SliderComponent;
