import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Install Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

const GallerySide = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const swiperRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setSelectedImage(images[index]);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index); // Sync the swiper with the selected thumbnail
        }
    };

    return (
        <div>
            <div className="flex flex-col xl:flex-row-reverse w-full">
                {/* Large Image Display (Swiper) */}
                <div className="w-full xl:w-5/6">
                    <Swiper
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        className="mySwiper h-[300px] lg:h-[500px]"
                        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
                        onSlideChange={(swiper) => setSelectedImage(images[swiper.activeIndex])} // Update selected image on slide change
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-contain md:object-contain rounded-lg bg-gray-200 py-3 md:py-6 xl:py-10"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Thumbnail Gallery */}
                <div className="w-full xl:w-1/6 flex flex-row xl:flex-col space-x-4 xl:space-x-0 xl:space-y-4 mt-4 xl:mt-0 xl:mr-1">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className={`cursor-pointer w-1/5 lg:w-24 h-1/3 lg:h-24 object-cover ${selectedImage === image ? 'ring-2 ring-blue-500' : ''} rounded-lg`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

GallerySide.propTypes = {
    images: PropTypes.array.isRequired,
};

export default GallerySide;
