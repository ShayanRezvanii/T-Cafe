import React from 'react'
import logo from '../../public/Background/logo.png'
function Logo() {
  return (
    <div className='flex flex-col w-full h-full  '>
          <img src={logo} width={70} height={70} className='object-cover absolute  z-30'  />
    </div>
  )
}

export default Logo