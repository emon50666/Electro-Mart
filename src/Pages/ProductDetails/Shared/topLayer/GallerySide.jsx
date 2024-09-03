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
            <div className="flex flex-col lg:flex-row-reverse w-full">
                {/* Large Image Display (Swiper) */}
                <div className="w-full lg:w-5/6">
                    <Swiper
                        spaceBetween={30}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
                        onSlideChange={(swiper) => setSelectedImage(images[swiper.activeIndex])} // Update selected image on slide change
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-full lg:w-full lg:h-[500px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Thumbnail Gallery */}
                <div className="w-full lg:w-1/6 flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4 mt-4 lg:mt-0 lg:mr-1">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className={`cursor-pointer w-24 h-24 object-cover ${selectedImage === image ? 'ring-2 ring-blue-500' : ''}`}
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
