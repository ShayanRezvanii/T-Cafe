import React from "react";
function Product({ openModalHandler, name, description, id, image, price }) {
  const handleClick = () => {
    openModalHandler({ id, name, description, price, image });
  };

  return (
    <div onClick={handleClick} className=' bg-neutral-300 cursor-pointer hover:bg-orange-300 duration-200 w-full max-w-[360px]   h-[90px] rounded-xl flex items-center relative   z-30'>
          <div className=" flex w-full h-full  items-center px-2 gap-x-3">
       
        <div className=' flex-col w-full   '>
              <div className=' w-full flex  items-end flex-col   gap-y-2 '>
              <h1 className='  text-xl  font-bold'>{name}</h1>
            <p className=' text-sm max-w-[200px]  text-right   '>{description}</p>
              </div>
        </div>
        <div className=' bg-white rounded-xl  w-full max-w-[70px] h-[70px]   '>
            <img src={image} />
        </div>
          </div>


        <div className=' absolute bg-neutral-500 bottom-0 p-2 rounded-tr-xl rounded-bl-xl text-white   '>{price}T</div>
    </div>

  );
}

export default Product;
