import instagram from "../../public/Icons/icons8-instagram-50.png"
import call from "../../public/Icons/icons8-call-50.png"
import location from "../../public/Icons/icons8-location-50.png"

function ContactBox() {
  return (
    <div className='   rounded-r-xl w-full mt-4 left-5  z-30 absolute top-0 flex   space-x-3   '>
       <a href="https://instagram.com/_u/tcafe.shop" rel="noreferrer" target="_blank">
       <img src={instagram} className='w-5  h-5 object-cover hover:cursor-pointer' />
       </a>

       <a href="tel:02122432330" rel="noreferrer" target="_blank">
       <img src={call} className='w-5 h-5 object-cover hover:cursor-pointer' />

       </a>

       <a href="https://maps.app.goo.gl/CCNhb4J7WHXr89Nt7" rel="noreferrer" target="_blank">
       <img src={location} className='w-5 h-5 object-cover hover:cursor-pointer' /> 

       </a>
    </div>
  )
}

export default ContactBox