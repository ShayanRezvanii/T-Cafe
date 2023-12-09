import React from 'react'
import pizza from '../../public/Products/pizza.png'
function Product() {
  return (
    <div className=' bg-gradient-to-l from-neutral-300 to-neutral-300 w-full max-w-[360px]  h-[90px] rounded-xl flex items-center relative   z-30'>
        <div className=' bg-white rounded-xl w-full max-w-[70px] h-[70px] absolute right-4 '>
            <img src={pizza} />
        </div>
        <div className=' flex-col w-full max-w-[250px] space-y-2'>
            <h1 className=' text-2xl text-right font-bold'>پیتزا</h1>
            <p className=' text-lg text-right'>گوشت ، قارچ ، فلفل دلمه</p>
        </div>

        <div className=' absolute bg-neutral-500 bottom-0 p-2 rounded-tr-xl rounded-bl-xl text-white   '>290T</div>
    </div>
  )
}

export default Product
