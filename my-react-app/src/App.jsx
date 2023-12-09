import { useState } from 'react'
import './App.css'
import back1 from '../public/Background/1.jpg'
import back2 from '../public/Background/2.jpg'
import Main from './Components/Logo'
import Logo from './Components/Logo'
import logo from '../public/Background/logo.png'
import ContactBox from './Components/ContactBox'
function App() {

  return (
    <>
      {/* Desktop Section */}
      <div className='h-screen w-full   flex items-center  justify-center '>
        <div className='flex justify-between md:hidden w-full max-w-[430px] h-full relative overflow-hidden'>
        <img src={logo} className=' object-cover w-10 h-10 rounded-full  ' />
      </div>

        {/* Mobile Section */}
        <div className='hidden md:block'>
        </div>
      </div>
    </>
  )
}

export default App
