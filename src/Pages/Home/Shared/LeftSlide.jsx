import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdModeEdit } from "react-icons/md";
import SliderModal from './SliderModal';
import useSlideImage from '../../../Hooks/useSlideImage';

const LeftSlide = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [sliderImages] = useSlideImage();

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
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderImages.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative">
                            <img
                                src={slide.url}
                                alt={`slide ${idx + 1}`}
                                className="w-full lg:min-h-[400px] max-h-[500px] h-[40vh] md:h-auto rounded-lg"
                            />
                            <span
                                onClick={() => openModal(`Edit content for slide ${idx + 1}`)}
                                className="absolute top-3 right-3 border-2 p-2 rounded-full bg-white/30 hover:bg-slate-700 hover:text-gray-300 cursor-pointer"
                            >
                                <MdModeEdit className="text-xl" />
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default LeftSlide;
