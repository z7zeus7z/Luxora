import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from '../../Products/ProductCard';

const NewArrivalSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      let data = await res.json();

      data = data.sort(() => Math.random() - 0.5);

      data = data.slice(0, 10);

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product._id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewArrivalSlider;
