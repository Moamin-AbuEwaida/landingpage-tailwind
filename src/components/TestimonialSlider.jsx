import React from "react";
import { testimonialsData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../Slider.css";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPreView={"auto"}
      centeredSlides={true}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, name, web, message } = slide;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-[20px] border border-accent-primary max-w-[645px] max-h-[330px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl"
          >
            <img src={image} alt="" />
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 font-semibold text-accent-primary">
                {web}
              </div>
              <p className="max-w-[240px]">{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
