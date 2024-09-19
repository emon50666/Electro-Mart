import { useEffect, useState } from "react";
import RelativeProductDetails from "./RelativeProductDetails";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const RelativeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data
    fetch("relatedProduct.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <RelativeProductDetails productsDetails={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelativeProducts;
