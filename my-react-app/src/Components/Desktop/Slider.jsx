import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import NextButton from "./NextButton";
import ProductsDesktop from "./ProductsDesktop";
import Logo from "../../../public/Background/tcafe.png";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

function Slider() {

  return (
      <Swiper
        className=" w-full h-screen  "
        direction={"vertical"}
        allowTouchMove={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img src={''} className=" w-full h-full" />
          <div className=" bg-black flex flex-col h-screen top-0 bg-black/30  absolute w-full">
            <div className=" w-full h-20 py-16 px-20">
              <h1 className=" text-[140px] text-right text-yellow-900">
                تی کافه
              </h1>
              <h3 className=" text-right text-5xl">خوش آمدید</h3>
            </div>
            <div className=" w-full flex justify-center h-screen items-end">
              <NextButton>مشاهده منو</NextButton>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" w-full h-full flex">
            <div className=" flex flex-col bg-black  w-full h-full">
              <div className=" text-2xl  w-full flex justify-center items-center h-[170px]">
                <div>
                  <img
                    src={Logo}
                    width={230}
                    height={230}
                    className=" object-cover "
                  />
                </div>
              </div>
              <div className="  w-full scrollbar-thin scrollbar-thumb-rounded-full overflow-y-scroll flex-1  h-full">
                <ProductsDesktop selectedValue={3} />
              </div>
            </div>
            <MouseParallaxContainer
              globalFactorX={0.1}
              globalFactorY={0.1}
              className=" w-full flex object-cover justify-center items-center bg-white h-full"
            >
              <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <img src={""} className=" object-cover w-[600px] h-[600px]" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className=" w-full h-full flex">
            <div className=" flex flex-col bg-black  w-full h-full">
              <div className=" text-2xl  w-full flex justify-center items-center h-[170px]">
                <div>
                  <img
                    src={""}
                    width={230}
                    height={230}
                    className=" object-cover "
                  />
                </div>
              </div>
              <div className="  w-full scrollbar-thin scrollbar-thumb-rounded-full overflow-y-scroll flex-1  h-full">
                <ProductsDesktop selectedValue={1} />
              </div>
            </div>
            <MouseParallaxContainer
              globalFactorX={0.1}
              globalFactorY={0.1}
              className=" w-full flex object-cover justify-center items-center bg-white h-full"
            >
              <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <img src={""} className=" object-cover w-[600px] h-[600px]" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </SwiperSlide>

        

        <SwiperSlide>
          <div className=" w-full h-full flex">
            <div className=" flex flex-col bg-black  w-full h-full">
              <div className=" text-2xl  w-full flex justify-center items-center h-[170px]">
                <div>
                  <img
                    src={""}
                    width={230}
                    height={230}
                    className=" object-cover "
                  />
                </div>
              </div>
              <div className="  w-full scrollbar-thin scrollbar-thumb-rounded-full overflow-y-scroll flex-1  h-full">
                <ProductsDesktop selectedValue={0} />
              </div>
            </div>
            <MouseParallaxContainer
              globalFactorX={0.1}
              globalFactorY={0.1}
              className=" w-full flex object-cover justify-center items-center bg-white h-full"
            >
              <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <img src={""} className=" object-cover w-[600px] h-[600px]" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" w-full h-full flex">
            <div className=" flex flex-col bg-black  w-full h-full">
              <div className=" text-2xl  w-full flex justify-center items-center h-[170px]">
                <div>
                  <img
                    src={""}
                    width={230}
                    height={230}
                    className=" object-cover "
                  />
                </div>
              </div>
              <div className="  w-full scrollbar-thin scrollbar-thumb-rounded-full overflow-y-scroll flex-1  h-full">
                <ProductsDesktop selectedValue={2} />
              </div>
            </div>
            <MouseParallaxContainer
              globalFactorX={0.1}
              globalFactorY={0.1}
              className=" w-full flex object-cover justify-center items-center bg-white h-full"
            >
              <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <img src={""} className=" object-cover w-[600px] h-[600px]" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
        </SwiperSlide>

      </Swiper>
  );
}

export default Slider;
