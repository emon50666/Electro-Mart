// Import necessary modules

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className=" mx-auto bg-[#F6F6F6] p-4  grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Side: Swiper Slider */}
      <div className="swiper-container">
        <Swiper
          modules={[Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          className="h-[300px] md:h-[400px] lg:h-[345px] rounded-md"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="bg-cover bg-center flex items-center h-full"
              style={{ backgroundImage: "url('https://i.ibb.co.com/G5hjB8W/electro-mart.png')" }}
            >
              {/* <div className="px-4 text-white">
                <h2 className="text-3xl lg:text-2xl font-bold mb-4">Apple Shopping Event</h2>
                <p className="text-lg mb-6">
                  Shop great deals on MacBook, iPad, iPhone, and more.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
                  Shop Now
                </button>
              </div> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-cover bg-center flex items-center  h-full"
              style={{ backgroundImage: "url('https://i.ibb.co.com/rtySNxb/Screenshot-10.png')" }}
            >
              <div className="px-4 text-white">
                <h2 className="text-3xl lg:text-2xl font-bold mb-4">Apple Shopping Event</h2>
                <p className="text-lg mb-6">
                  Shop great deals on MacBook, iPad, iPhone, and more.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Additional Slide (Optional) */}
          <SwiperSlide>
            <div
              className="bg-cover bg-center flex items-center  h-full"
              style={{ backgroundImage: "url('https://i.ibb.co.com/wpM5NpT/Screenshot-9.png')" }}
            >
              <div className=" px-4 ">
                <h2 className="text-3xl text-white lg:text-2xl font-bold mb-4">Apple Shopping Event</h2>
                <p className="text-lg text-white mb-6">
                  Shop great deals on MacBook, iPad, iPhone, and more.
                </p>
                <button className="bg-orange-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right Side: Static Content */}
      <div className="">
        {/* Top Section */}
        <div className="bg-cover bg-center flex items-center h-[200px] transform transition duration-500 hover:scale-105  rounded-md "
          style={{ backgroundImage: "url('https://i.ibb.co.com/L6vjcpG/logitech-aurora-headset.jpgg') " }}>


          <div className=" px-4  ">
            <h2 className="text-3xl text-[#ff8397] lg:text-2xl font-bold mb-4">G735 Wireless Gaming Headset</h2>
            <p className="text-md mb-6 text-[#ffffff]">
              Explore new worlds with new levels of comfort and a dreamy aesthetic.
            </p>
            <button className="bg-[#ff899d] hover:bg-[#ff95a7] text-white py-2 px-6 rounded-lg">
              Shop Now
            </button>
          </div>

        </div>

        {/* Bottom Section 1 */}
        <div className='grid grid-cols-2 mt-4 gap-2'>

          <div className="bg-cover bg-center flex items-center h-[130px]   rounded-md "
            style={{ backgroundImage: "url('https://i.ibb.co.com/889DLhf/new-dualsense.jpg')" }}>
            <div className=" px-4 text-white">
              <h2 className="text-md text-white text-md font-bold mb-2">New Dual Sense
              </h2>
                 <p className='mb-2 text-gray-200'>For PlayStation 5</p>
              <button className="bg-[#c7e8ff] hover:bg-gray-200 text-black px-2 py-1  text-sm rounded-md">
              View Details
              </button>
            </div>

          </div>

          {/* Bottom Section 2 */}
          <div className="bg-cover bg-center flex items-center h-[130px]  rounded-md "
            style={{ backgroundImage: "url('https://i.ibb.co.com/yNqhHT0/instant-cameras.jpg')" }}>
            <div className=" px-4 text-white">
              <h2 className="text-md text-white text-md font-bold mb-2">Instant Cameras
              </h2>
                 <p className='mb-2 text-gray-200'>Get photo paper as a gift</p>
              <button className="bg-[#fee79e] hover:bg-gray-200 text-black px-2 py-1  text-sm rounded-md">
              View Details
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
