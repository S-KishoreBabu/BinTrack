import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import profile from "../assets/profile.jpg"
import SidebarContext from '../context/SidebarContext';
import { useContext } from 'react';
const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  return (
    <div className='w-full h-16 bg-[#252525] sticky top-0 z-10 flex items-center justify-between text-white px-4 border-b-2 border-green-600'>
        <div className='flex justify-around items-center w-40'>
          <GiHamburgerMenu onClick={()=>{setIsOpen(!isOpen)}} />
          <h1 className="bg-linear-to-r from-green-500 via-green-300 to-green-500 bg-clip-text text-transparent font-extrabold text-2xl ">BinTrack</h1>

        </div>

        <ul className='flex justify-around w-100 items-center' >
            <li className='w-max px-4 py-1 hover:bg-gray-700  cursor-pointer duration-100 rounded-4xl'>about us</li>
            <li className='w-max px-4 py-1 hover:bg-gray-700  cursor-pointer duration-100 rounded-4xl'>contact</li>
            <li className='w-max px-4 py-1 hover:bg-gray-700  cursor-pointer duration-100 rounded-4xl'>notification</li>
            <div id="profile" className='w-10 h-10 overflow-hidden rounded-full bg-gray-600'>
              <img src={profile} alt="profile" />
            </div>    
        </ul>
    </div>
  )
}

export default Header