// Import necessary modules

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Benner = () => {
  return (
    <div className=" mx-auto p-4 mt-[72px] grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              className="bg-cover bg-center flex items-center  h-full"
              style={{ backgroundImage: "url('https://i.ibb.co/Zc6j0sV/Screenshot-8.png')" }}
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
              <div className=" px-4 text-white">
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
        </Swiper>
      </div>

      {/* Right Side: Static Content */}
      <div className="">
        {/* Top Section */}
        <div className="bg-pink-100 p-6 rounded-lg text-center relative">
          <h3 className="text-2xl font-semibold mb-4">Aurora Headset</h3>
          <div className="flex justify-center space-x-4 text-gray-700 font-bold text-lg">
            <div className="text-center">
              <div>69</div>
             
            </div>
          </div>
         
        </div>

        {/* Bottom Section 1 */}
        <div className='grid grid-cols-2 mt-4 gap-2'>
        <div className="bg-yellow-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">New Dual Sense</h3>
          <p className="text-gray-700">For PlayStation 5</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
            View Details
          </button>
        </div>

        {/* Bottom Section 2 */}
        <div className="bg-orange-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-4">Instant Cameras</h3>
          <p className="text-gray-700">Get photo paper as a gift</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg">
            View Details
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Benner;
