import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Magnifier from 'react-magnifier';



const GallerySide = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const swiperRef = useRef(null);

    const handleThumbnailClick = (index) => {
        setSelectedImage(images[index]);
        if (swiperRef?.current) {
            swiperRef?.current.slideTo(index); // Sync the swiper with the selected thumbnail
        }
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row-reverse  gap-x-2 w-full">
                {/* Large Image Display (Swiper) */}
                <div className="w-full lg:w-5/6">
                    <Swiper
                        spaceBetween={30}
                        modules={[Pagination, Navigation]}
                        className="mySwiper  h-[300px] lg:h-[500px] "
                        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
                        onSlideChange={(swiper) => setSelectedImage(images[swiper.activeIndex])} // Update selected image on slide change
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                {/* <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="w-full  h-full object-contain md:object-contain rounded-lg bg-gray-200 py-3 md:py-3 lg:py-10"
                                /> */}
                                <Magnifier
                                    className="w-full h-full object-contain md:object-contain border-2 rounded-lg p-3 lg:p-16"
                                    src={image}
                                    width={`80%`}
                                    height={`100%`}
                                    mgWidth={200}
                                    mgHeight={200}
                                    mgShape={'square'}

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
