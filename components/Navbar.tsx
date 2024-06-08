"use client";
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='flex justify-between px-[20vw] xs:px-3 py-10 items-center w-full relative'>
        <div>
        <h1 className='text-2xl font-semibold'>Toingg</h1>
        </div>
        <div className='rounded-full px-5 py-2 flex gap-8 font-medium border xs:hidden'>
            <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Contact</a>
            <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Pricing</a>
            <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Documentation</a>
            <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Join our community</a>
        </div>

        <div className='hidden xs:flex text-3xl text-orange-500' onClick={toggleMenu}>
          <IoMdMenu/>
        </div>
    {menuOpen && (
      <div className='fixed w-[95%] z-50 h-[85vh] bottom-5 rounded-xl bg-gradient-to-b py-10 from-[#FDEADC] to-[#D38851]'>

        <div className='flex flex-col items-start justify-center gap-8 text-lg font-medium '>
          <div className='flex justify-between items-center w-full px-3'>
            <div>
          <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Contact</a>
            </div>
            <div>
          <IoIosArrowRoundForward className='text-3xl'/>
            </div>
          </div>
          <div className='flex justify-between items-center w-full px-3'>
            <div>
          <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Pricing</a>
            </div>
            <div>
          <IoIosArrowRoundForward className='text-3xl'/>
            </div>
          </div>
          <div className='flex justify-between items-center w-full px-3'>
            <div>
          <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Documentation</a>
            </div>
            <div>
          <IoIosArrowRoundForward className='text-3xl'/>
            </div>
          </div>
          <div className='flex justify-between items-center w-full px-3'>
            <div>
          <a href="#" className='rounded-full py-1 px-3 hover:bg-orange-400 hover:text-gray-200'>Join our community</a>
            </div>
            <div>
          <IoIosArrowRoundForward className='text-3xl'/>
            </div>
          </div>
        </div>
      </div>
    )}

    </div>
  )
}

export default Navbar