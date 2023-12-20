import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react.es";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider({ selectedValue, onSelectionChange }) {
  const [details, setDetails] = useState(null);
  const swipe = useSwiper()
  const [focusedIndex, setFocusedIndex] = useState(0);
  const handleSlideFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleSlideBlur = () => {
    setFocusedIndex(null);
  };

  useEffect(()=>{
    onSelectionChange(focusedIndex)
  },[focusedIndex])
  
  const handleClick = (value) => {
    onSelectionChange(value);

  };

  return (
    <Swiper
      className="z-30 cursor-pointer "
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={2}
      slideToClickedSlide={true}
      onActiveIndexChange={(index)=> {
        // setFocusedIndex(index.activeIndex)
        setFocusedIndex(index.activeIndex)

      }}

      spaceBetween={40}
      loop={false}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false
      }}
      grabCursor={true}
      
      modules={[EffectCoverflow, Pagination]}
    >


      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={` rounded-xl w-full outline-none   text-sm h-[56px] bg-yellow-50  ${
              isActive ?  "swiper-slide-active   " : "  "
            } flex justify-center items-center`}
            onFocus={() => handleSlideFocus(1)}
            onBlur={handleSlideBlur}
            tabIndex="0"
            onClick={() => handleClick(focusedIndex)}
          >
            کیک ها
          </div>
        )}
      </SwiperSlide>


      <SwiperSlide >
        {({ isActive }) => (
          <div
            className={` rounded-xl outline-none text text-sm  h-[56px] bg-yellow-50 ${
              isActive ? " swiper-slide-active   " : ""
            } flex justify-center items-center`}
            onFocus={() => handleSlideFocus(0)}
            onBlur={handleSlideBlur}
            tabIndex="0"
            onClick={() => handleClick(focusedIndex)}
          >
            فست فود
          </div>
        )}
      </SwiperSlide>

      
      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={` rounded-xl w-full outline-none  text-sm h-[56px] bg-yellow-50  ${
              isActive ? "swiper-slide-active     " : "  "
            } flex justify-center items-center`}
            onFocus={() => handleSlideFocus(2)}
            onBlur={handleSlideBlur}
            tabIndex="0"
            onClick={() => handleClick(focusedIndex)}
          >
            نوشیدنی های سرد
          </div>
        )}
      </SwiperSlide>

      <SwiperSlide>
        {({ isActive }) => (
          <div
            className={` rounded-xl w-full outline-none  text-sm h-[56px] bg-yellow-50  ${
              isActive ? "swiper-slide-active      " : "  "
            } flex justify-center items-center`}
            onFocus={() => handleSlideFocus(3)}
            onBlur={handleSlideBlur}
            tabIndex="0"
            onClick={() => handleClick(focusedIndex)}
          >
            نوشیدنی های گرم
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
