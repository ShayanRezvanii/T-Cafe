import React from 'react'
import instagram from "../../public/Icons/icons8-instagram-50.png"
import call from "../../public/Icons/icons8-call-50.png"
import location from "../../public/Icons/icons8-location-50.png"
function ContactBox() {
  return (
    <div className='   rounded-r-xl w-full mt-4 left-5  z-30 absolute top-0 flex   space-x-3   '>
    <img src={instagram} className='w-5  h-5 object-cover hover:cursor-pointer' />
    <img src={call} className='w-5 h-5 object-cover hover:cursor-pointer' />
    <img src={location} className='w-5 h-5 object-cover hover:cursor-pointer' /> 
</div>
  )
}

export default ContactBox