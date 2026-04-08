import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import profile from "../../assets/profile.jpg";
import {SidebarContext} from '../../context/SidebarContext';
import { useContext } from 'react';
import Toggle from "../ui/Toggle";
import DropDown from '../ui/DropDown';
const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return (
    <div className='w-full h-16 bg-[#FAFAFA] dark:bg-[#262626] sticky top-0 z-10 flex items-center justify-between text-dark dark:text-white px-4 border-b-2 border-green-600'>
        <div className='flex justify-around items-center w-40'>
          <GiHamburgerMenu className='lg:hidden' onClick={()=>{setIsOpen(!isOpen)}} />
          <h1 className="bg-linear-to-r from-green-500 via-green-300 to-green-500 bg-clip-text text-transparent font-extrabold text-2xl ">BinTrack</h1>

        </div>

        <ul className='flex justify-around w-max items-center gap-2' >
            <Toggle/>
            <li className='w-max px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-700  cursor-pointer duration-100 rounded-4xl hidden md:hidden lg:block'>about us</li>
            <li className='w-max px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-700  cursor-pointer duration-100 rounded-4xl hidden md:hidden lg:block'>contact</li>
            <li className='w-max px-4 py-1 hover:bg-gray-300 dark:hover:bg-gray-700  cursor-pointer duration-100 rounded-4xl hidden md:hidden lg:block'>notification</li>
            <DropDown dropDownHead={(<div id="profile" className='w-10 h-10 overflow-hidden rounded-full bg-gray-600'>
              <img src={profile} alt="profile" />
            </div>)} left= "-120px" top="0px" >
            <div className='h-10 w-max'>
                
                    <button className='h-9 rounded-3xl w-max bg-[#E5E5E5] dark:bg-[#525252] hover:bg-[#d2d2d2] dark:hover:bg-[#262626] cursor-pointer dark:text-[#f5f5f5] px-5' onClick={handleLogout} >Logout</button>
            </div>

            </DropDown>
 
        </ul>
    </div>
  )
}

export default Header