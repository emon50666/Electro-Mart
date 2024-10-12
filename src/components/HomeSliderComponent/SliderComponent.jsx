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
      image: "https://i.postimg.cc/WbF7cKTj/slider0102.jpgg",
      title: "Freedom With AirPods",
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
            <div className="relative w-full h-[190px]  md:-auto lg:h-[357px] xl:h-[400px] 2xl:h-[450px] ">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-start p-10 text-white">
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl">{slide.subtitle}</h3>
                  <h1 className="text-2xl md:text-4xl font-bold">{slide.title}</h1>
                  <p className="text-sm md:text-lg">{slide.description}</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md">
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