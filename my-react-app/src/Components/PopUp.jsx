import React from 'react'
import pizza from '/Products/pizza.png'


function PopUp({selectedProduct, closeButton}) {
  return (
    <div className=' w-full relative  h-full max-w-[320px] flex-col items-center flex  p-4 max-h-[400px] rounded-xl bg-white '>
        <button onClick={closeButton} className=' text-red-600 absolute right-6 top-6'>X</button>
            <img src={selectedProduct.image} className=' w-full  max-w-[200px] h-full max-h-[200px]' />
            <div className=' flex justify-center flex-col items-center space-y-4'>
                <p className=' text-3xl w-full text-center'>{selectedProduct.name}</p>
                <p className=' text-right text-sm'>توضیحات : {selectedProduct.description}</p>
                <p className=' bg-black w-full max-w-[90px] text-white text-center p-1 rounded-lg'>{selectedProduct.price}T</p>
            </div>
    </div>
  )
}

export default PopUp