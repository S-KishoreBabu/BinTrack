import React, {useContext} from 'react'
import { SidebarContext } from '../../context/SidebarContext';
import { IoGridOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
const SideBar = () => {
    // const [isOpen,setIsOpen] = useState(true);
    const {isOpen} = useContext(SidebarContext);
  return (
    <div>
        <div className={ isOpen ? "none lg:hidden fixed p-2 z-1 w-60 h-full":'hidden  fixed p-2 z-1 w-60 h-full'}>
            <div className=' rounded-md h-max bg-[#FAFAFA] dark:bg-[#373737] shadow-xl  w-full p-2' >
                <ul className='text-[#OAOAOA] dark:text-[#d4d4d4]'>
                    <li className='w-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-[#262626]  cursor-pointer duration-100 rounded-4xl'>about us</li>
                    <li className='w-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-[#262626] cursor-pointer duration-100 rounded-4xl'>contact</li>
                    <li className='w-full px-4 py-1 hover:bg-gray-300 dark:hover:bg-[#262626]  cursor-pointer duration-100 rounded-4xl'>notification</li>
                    {/* <li className='flex w-full h-max justify-start gap-5 items-center hover:bg-[#E5E5E5] dark:hover:bg-[#262626]  rounded-2xl px-3 py-1'>
                        <IoGridOutline className='text-xl font-extrabold' />
                        <span>Grid View</span>
                    </li>
                    <li className='flex w-full h-max justify-start gap-5 items-center hover:bg-[#E5E5E5] dark:hover:bg-[#262626] rounded-2xl px-3 py-1'>
                        <CiViewTable />
                        <span>Table View</span>
                    </li>
                    <li className='flex w-full h-max justify-start gap-5 items-center hover:bg-[#E5E5E5] dark:hover:bg-[#262626] rounded-2xl px-3 py-1'>
                        <FaMapMarkerAlt />
                        <span>Map View</span>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

//bg-[#00000014] 
export default SideBar