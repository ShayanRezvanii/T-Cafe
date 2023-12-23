import React from "react";
import { SwiperSlide, Swiper, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import coffee from "/Products/Coffee-Beans.jpg";
import NextButton from "./NextButton";
import Products from "../Products";
import Product from "../Product";
import data from '../../../Data/products.json'
import ProductsDesktop from "./ProductsDesktop";

function Slider() {
  const swiper = useSwiper()


  return (
    <>
      <Swiper
        className=" w-full h-screen "
        direction={"vertical"}
        allowTouchMove={false}
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
            <div className=' w-full h-full flex'>
        <div className=' flex flex-col  w-full h-full'>
            <div className=' text-2xl bg-yellow-300 w-full flex justify-center items-center max-h-[170px] h-full'>
              LOGO
            </div>
            <div className=' bg-red-300 w-full  h-full'>
            <ProductsDesktop />
                
            </div>

        </div>
        <div className=' bg-green-300 w-full h-full'></div>

    </div>
        </SwiperSlide>  

      </Swiper>
    </>
  );
}

export default Slider;
