import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ProductSlider = (props) => {
    const {images=[]} = props;
     if (!images || images.length === 0) {
    return <p>No images available</p>;
  }
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img 
              src={img} 
              alt={`Slide ${index}`} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProductSlider