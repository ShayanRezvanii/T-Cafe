import React from "react";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import coffee from "/Products/Coffee-Beans.jpg";
import NextButton from "./NextButton";
function Slider() {
  const swiper = useSwiper()


  return (
    <>
      <Swiper
        className=" w-full h-screen "
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img src={coffee} className=" w-full h-full" />
          <div className=" bg-black flex flex-col h-screen top-0 bg-black/30  absolute w-full">
            <div className=" w-full h-20 py-16 px-20">
              <h1 className=" text-[140px] text-right text-yellow-900">تی کافه</h1>
              <h3 className=" text-right text-5xl">خوش آمدید</h3>
            </div>
            <div className=" w-full flex justify-center h-screen items-end">
              <NextButton>مشاهده منو</NextButton>
            </div>
          </div>

         </SwiperSlide>
        <SwiperSlide>
          <img src={coffee} className=" w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coffee} className=" w-full h-full" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
