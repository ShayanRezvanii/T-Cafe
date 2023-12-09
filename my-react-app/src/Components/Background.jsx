import logo from "/Background/logo.png";
import back1 from "/Background/1.jpg";
import back2 from "/Background/2.jpg";

import Product from "./Product";
import ContactBox from "./ContactBox";


function Background() {
    const backgroundStyle = {
        backgroundImage: `url(${back1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
         <div className=" w-full bg-red-400 max-w-[460px] flex flex-col justify-center items-center  h-full   " style={backgroundStyle}>
                <img
                src={logo}
                className=" absolute top-20  left-1/2 transform -translate-x-1/2 -translate-y-1/2
                bg-white rounded-full w-20 h-20   z-30"
                    />
            <div className="  w-full h-screen">
                <ContactBox />
            </div>


            <div className="  bottom-64 w-full max-w-[460px] flex justify-center items-center  space-y-4  mb-10  flex-col  ">
            <Product />
            <Product />
            <Product />
            <Product />
            
            </div>
        </div>
  )
}

export default Background



// <img
// src={logo}
// className=" absolute top-20  left-1/2 transform -translate-x-1/2 -translate-y-1/2
// bg-white rounded-full w-20 h-20   z-30"
// />
// <img src={back1} className=" w-[50%] object-cover" />
// <img src={back2} className=" w-[50%] object-cover" />
// <div className=' bg-gradient-to-b from-black/20 to-black/90 w-full h-full absolute   z-20'></div>