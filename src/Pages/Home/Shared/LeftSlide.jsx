import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";
import useSlideImage from "../../../Hooks/useSlideImage";
import SliderModal from "./SliderModal";

const LeftSlide = () => {
    const [sliderImages] = useSlideImage()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                //   navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderImages.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative">
                            <img
                                src={slide.url}
                                alt={`slide ${idx + 1}`}
                                className="w-full max-h-[500px] h-[40vh] md:h-auto"
                            />
                            <span
                                onClick={() => openModal()}
                                className="absolute top-3 right-3 border-2 p-2 rounded-full bg-white/30 hover:bg-slate-700 hover:text-gray-300"
                            >
                                <MdModeEdit className="text-xl" />
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default LeftSlide;