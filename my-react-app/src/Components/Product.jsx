import React from 'react'
import pizza from '/Products/pizza.png'
function Product({title, image, desc, price}) {
  return (
    <div className=' bg-neutral-300 cursor-pointer hover:bg-orange-300 duration-200 w-full max-w-[360px]   h-[90px] rounded-xl flex items-center relative   z-30'>
        <div className=' bg-white rounded-xl  w-full max-w-[70px] h-[70px] absolute right-4 '>
            <img src={image} />
        </div>
        <div className=' flex-col w-full max-w-[250px] space-y-2'>
            <h1 className='  text-xl text-right font-bold'>{title}</h1>
            <p className=' text-lg text-right'>{desc}</p>
        </div>

        <div className=' absolute bg-neutral-500 bottom-0 p-2 rounded-tr-xl rounded-bl-xl text-white   '>{price}T</div>
    </div>
  )
}

export default Product
