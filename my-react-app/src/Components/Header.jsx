import React from 'react'
import instagram from "../../public/Icons/icons8-instagram-50.png"
import call from "../../public/Icons/icons8-call-50.png"
import location from "../../public/Icons/icons8-location-50.png"

function Header() {
  return (
    <div className=' w-full bg-black text-white justify-between h-[40px] flex  p-2'>
<div className=' w-full flex space-x-3'>
<img src={instagram} className=' text-white w-5 h-5' />
        <img src={call} className=' text-white w-5 h-5' />
        <img src={location} className=' text-white w-5 h-5' />
</div>

<div className='w-full max-w-[140px] flex justify-center items-center'>
    <p className='  text-xs'> Tel: 021-88-665-222</p>
</div>

    </div>
  )
}

export default Header