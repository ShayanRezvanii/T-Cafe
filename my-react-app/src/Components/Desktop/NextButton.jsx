import React from 'react'
import { useSwiper } from 'swiper/react'

function NextButton({children}) {
    const swiper = useSwiper()
  return (
    <button className='text-white border rounded-md px-4 py-2 mb-14 hover:bg-white hover:text-black duration-200' onClick={() => swiper.slideNext() }>{children}</button>
  )
}

export default NextButton