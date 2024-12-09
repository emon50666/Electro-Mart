import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdModeEdit } from "react-icons/md";
import SliderModal from "./SliderModal";
import useSlideImage from "../../../Hooks/useSlideImage";
import useRoll from "../../../Hooks/useRoll";
import { Link } from "react-router-dom";

const LeftSlide = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [sliderImages] = useSlideImage();
  const [role] = useRoll();

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderImages.length > 0 ? (
          sliderImages.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Link to={"/"} className="relative">
                <img
                  src={slide.url}
                  alt={`slide ${idx + 1}`}
                  className="w-full cursor-pointer lg:min-h-[300px] md:max-h-[300px] lg:max-h-[392px] h-[30vh] md:h-auto rounded-lg object-contain md:object-fill"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-center md:left-5 lg:left-8 px-1">
                  {slide.title !== "None" && (
                    <h2 className="text-sm md:text-base md:font-medium lg:text-lg lg:font-semibold lg:w-1/2 text-white bg-black/50 p-4 rounded-lg">
                      {slide.title}
                    </h2>
                  )}
                  {/* <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
                                        Shop Now
                                    </Link> */}
                </div>
                {role === "admin" && (
                  <span
                    onClick={() =>
                      openModal(`Edit content for slide ${idx + 1}`)
                    }
                    className="absolute top-3 right-3 border-2 p-2 rounded-full bg-white/30 hover:bg-slate-700 hover:text-gray-300 cursor-pointer"
                  >
                    <MdModeEdit className="text-md md:text-xl" />
                  </span>
                )}
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://placehold.co/620x400" // Static placeholder image
                alt="default slide"
                className="w-full lg:min-h-[300px] md:max-h-[300px] lg:max-h-[351px] xl:max-h-[648px] h-[30vh] md:h-full rounded-lg object-contain md:object-right lg:object-fill"
              />
              <div className=" inset-0 flex flex-col items-start justify-center space-y-4 md:left-5 lg:left-8 px-1">
                <h2 className="text-sm md:text-base md:font-medium lg:text-lg lg:font-semibold lg:w-1/2 text-white bg-black/50 p-4 rounded-lg">
                  Default Slide
                </h2>
              </div>
              {role === "admin" && (
                <span
                  onClick={() => openModal(`Edit content for slide ${1}`)}
                  className="absolute top-3 right-3 border-2 p-2 rounded-full bg-white/30 hover:bg-slate-700 hover:text-gray-300 cursor-pointer"
                >
                  <MdModeEdit className="text-md md:text-xl" />
                </span>
              )}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <SliderModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default LeftSlide;
