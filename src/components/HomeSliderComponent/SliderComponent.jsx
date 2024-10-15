// SliderComponent.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';



const  HomeSliderComponent =() => {
  const slides = [
    {
      id: 1,
      image: "https://i.postimg.cc/L4fXdBww/slider0101.jpg",
      title: "iPhone 16 Pro Max",
      subtitle: "New Camera. New Design.",
      description: "Titanium. So Strong. So Light. So Pro.",
      buttonText: "Shop now",
    },
    {
      id: 1,
      // image: "https://i.postimg.cc/WbF7cKTj/slider0102.jpgg",
      image: "https://i.ibb.co.com/MGjpMXc/Image-4-min.jpg",

      title: "Freedom With Heap Phone",
      subtitle: "Experience Sound.",
      description: "Unleash Wireless Sound Freedom.",
      buttonText: "Shop now",
    },
  ];

  return (
    <div className="w-full mx-auto overflow-hidden mt-16 mb-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-auto   ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover h-[150px] md:h-[180px] lg:h-[357px] xl:h-[400px] 2xl:h-[450px]"
              />
              <div className="absolute lg:pl-20 xl:pl-24 2xl:pl-24 pt-10 pb-10 inset-0 bg-black bg-opacity-40 flex items-center justify-start p-10 text-white">
                <div className="">
                  <h3 className="text-md md:text-xl">{slide.subtitle}</h3>
                  <h1 className="text-md md:text-4xl font-bold">{slide.title}</h1>
                  <p className="text-sm md:text-lg">{slide.description}</p>
                  <button className="px-2 mt-2 py-2 bg-green-500 hover:bg-green-600 text-white  rounded-md">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeSliderComponent;