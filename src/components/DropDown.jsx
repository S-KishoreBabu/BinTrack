import React from 'react'
import { useState,useRef ,useEffect} from 'react';
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
const DropDown = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(()=>{
        const clickOutside = (e)=>{
            if(dropDownRef.current && !dropDownRef.current.contains(e.target)){
                setDropDown(false);
            }
        }
        document.addEventListener("mousedown",clickOutside);
        return(()=>{
            document.removeEventListener("mousedown",clickOutside);
        })
    },[])
  return (
        <div className='relative' ref={dropDownRef}>
            <div onClick={()=>{setDropDown(!dropDown)}} className='p-2 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] dark:bg-[#4a4a4a] ml-5 cursor-pointer dark:hover:bg-[#373737]'>
                {props.filterUsed?<FaFilter  className='text-2xl text-blue-500' />:<CiFilter className='text-2xl'/>}
                </div>
            {dropDown && 
                <div style={{marginLeft:props.left,marginTop:props.top}}  className="absolute bg-[#FAFAFA] dark:bg-[#373737] dark:border dark:border-[#525252] shadow-lg rounded-lg p-3 z-50">
                {props.children}
                </div>
            }
        </div>
  )
}

export default DropDown