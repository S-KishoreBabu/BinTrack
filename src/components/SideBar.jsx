import React, {useContext} from 'react'
import SidebarContext from '../context/SidebarContext';
import { IoGridOutline } from "react-icons/io5";
import { CiViewTable } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
const SideBar = () => {
    // const [isOpen,setIsOpen] = useState(true);
    const {isOpen,setIsOpen} = useContext(SidebarContext);
  return (
    <div>
        <div style={{display:isOpen?"block":"none"}} className=' fixed p-2  z-1 w-60 h-full'>
            <div className='border-white border  rounded-2xl h-full backdrop-blur-md  w-full p-2' >
                <ul className='text-white'>
                    <li className='flex w-full h-max justify-start gap-5 items-center hover:bg-[#373737] rounded-2xl px-3 py-1'>
                        <IoGridOutline className='text-xl font-extrabold' />
                        <span>Grid View</span>
                    </li>
                    <li className='flex w-full h-max justify-start gap-5 items-center hover:bg-[#373737] rounded-2xl px-3 py-1'>
                        <CiViewTable />
                        <span>Table View</span>
                    </li>
                    <li className='flex w-full h-max justify-start gap-5 items-center hover:bg-[#373737] rounded-2xl px-3 py-1'>
                        <FaMapMarkerAlt />
                        <span>Map View</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

//bg-[#00000014] 
export default SideBar