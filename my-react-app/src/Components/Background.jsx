import logo from "/Background/logo.png";
import back1 from "/Background/1.jpg";
import back2 from "/Background/2.jpg";
import Slider from "./Slider";
import Products from "./Products";
import { useEffect, useState } from "react";
import data from '../../Data/products.json';

import PopUp from "./PopUp";

function Background() {
  const [selectedValue, setSelectedValue] = useState("Cakes");

  

  const backgroundStyle = {
    backgroundImage: `url(${back1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
  };

  return (
    <div
      className=" w-full bg-red-400 max-w-[460px] flex flex-col relative  items-center  h-full "
      style={backgroundStyle}
    >
      <img
        src={logo}
        className=" absolute top-28  left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-20 h-20   z-30"
      />
      <div className="  w-full h-screen"></div>



      <div className="  w-full mb-20   ">
        <Slider
          selectedValue={selectedValue}
          onSelectionChange={handleChange}
        />
      </div>

      <div className="   bottom-64  h-full max-h-[400px] overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-full  scrollbar-thumb-white   w-full max-w-[460px] flex justify-start pb-32  items-center  space-y-4  mb-3  flex-col  ">
        <Products selectedValue={selectedValue}  />
      </div>
      <div className=" bg-gradient-to-b from-black/5 to-black w-full h-full absolute   z-20"></div>
    </div>
  );
}

export default Background;

// <img
// src={logo}
// className=" absolute top-20  left-1/2 transform -translate-x-1/2 -translate-y-1/2
// bg-white rounded-full w-20 h-20   z-30"
// />
// <img src={back1} className=" w-[50%] object-cover" />
// <img src={back2} className=" w-[50%] object-cover" />
// <div className=' bg-gradient-to-b from-black/20 to-black/90 w-full h-full absolute   z-20'></div>
