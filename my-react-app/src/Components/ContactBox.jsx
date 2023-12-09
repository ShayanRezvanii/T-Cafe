import React from 'react'
import instagram from "../../public/Icons/instagram-50.png"
import call from "../../public/Icons/call-50.png"
import location from "../../public/Icons/location-50.png"
function ContactBox() {
  return (
    <div className=' bg-white rounded-r-xl w-full h-[30px] max-w-[120px] z-30 absolute top-16 flex space-x-3 justify-center items-center'>
    <img src={instagram} className='w-6 h-6 object-cover hover:cursor-pointer ' />
    <img src={call} className='w-6 h-6 object-cover hover:cursor-pointer' />
    <img src={location} className='w-6 h-6 object-cover hover:cursor-pointer' /> 
</div>
  )
}

export default ContactBox