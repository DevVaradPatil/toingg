import React from 'react'
import "./Marquee.css";

const Headbar = () => {
  return (
    <div className='w-full bg-gradient-to-b marquee-container py-1 flex items-center justify-center from-[#FFD3B4] to-white'>
      <div className='xs:hidden'>
        <div className='marquee'>
        We are still in beta mode, The demo call is highly tuned for Toinggs help desk and when you make a call with us with Toingg you are agreeing all the T&Cs by default.
        </div>
      </div>
        <div className='hidden xs:flex '>
          Join our Community. <span className='font-bold pl-2'>Learn more</span>
        </div>
    </div>
  )
}

export default Headbar