import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import f1 from '../../../assets/f1.jpg';
import f2 from '../../../assets/f2.jpg';
import f3 from '../../../assets/f3.jpg';
const MainSlider = () => {
  return (
    <>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation       
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        
        >
            <SwiperSlide>
                <img src={f1} alt="Slide 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={f2} alt="Slide 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={f3} alt="Slide 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default MainSlider