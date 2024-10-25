import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
// import useSlideImage from '../../../../Hooks/useSlideImage';

const RightBottomR = () => {
    // const [sliderImages] = useSlideImage();
    const sliderImages = [
        {
            url: 'https://i.ibb.co.com/G5hjB8W/electro-mart.png',
            title: 'None'

        },
        {
            url: 'https://i.ibb.co.com/G5hjB8W/electro-mart.png',
            title: 'None'
        },
        {
            url: 'https://res.cloudinary.com/duv5fiurz/image/upload/v1729583922/jzz7ttoztbmo9un9ese0.jpg',
            title: 'None'
        },
        {
            url: 'https://i.ibb.co.com/G5hjB8W/electro-mart.png',
            title: 'None'
        },

    ]

    return (
        <div className="max-w-full">
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
                {sliderImages.slice(1, 2).map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative">
                            <img
                                src={slide.url}
                                alt={`slide ${idx + 1}`}
                                className="w-full max-h-[190px] h-[40vh] md:h-auto rounded-lg"
                            />
                            <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 left-8">
                                {slide.title !== "None" && <h2 className="text-lg font-semibold w-1/2 text-white bg-white/50 p-4 rounded-lg">
                                    {slide.title}
                                </h2>}

                                <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RightBottomR;
