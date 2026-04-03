import React from 'react'
import { useState,useRef ,useEffect} from 'react';
import { CiFilter } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
const DropDown = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const dropDownRef = useRef(null);
    useEffect(()=>{
        const clickOutside = (e)=>{
            console.log(e.target);
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
            <div onClick={()=>{setDropDown(!dropDown)}} className='p-2 rounded-full bg-[#4a4a4a] ml-5 cursor-pointer hover:bg-[#373737]'>
                {props.filterUsed?<FaFilter  className='text-2xl text-blue-500' />:<CiFilter className='text-2xl'/>}
                </div>
            {dropDown && 
                <div style={{marginLeft:props.left,marginTop:props.top}}  className="absolute bg-[#373737] border border-[#525252] shadow-lg rounded-lg p-3 z-50">
                {props.children}
                </div>
            }
        </div>
  )
}

export default DropDown